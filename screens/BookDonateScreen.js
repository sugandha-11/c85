import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,List} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { ListItem,Badge } from 'react-native-elements'
import MyHeader from '../components/MyHeader';




export default class BookDonateScreen extends Component{
    constructor(){
        super();
        this.state={
            requestedBooksList:[]
        }
        this.requestRef=null;
    }

    getRequestedBooksList =()=>{
      console.log("get bk list")
        this.requestRef = db.collection("BookRequests")
        .onSnapshot((snapshot)=>{
          var requestedBooksList = snapshot.docs.map(document => document.data());
          console.log("bk list ", requestedBooksList)
          this.setState({
            requestedBooksList : requestedBooksList
          });
        })
      }
      componentDidMount(){
        this.getRequestedBooksList()
      }
    
      componentWillUnmount(){
        this.requestRef();
      }
      keyExtractor = (item, index) => index.toString()

      renderItem = ( {item, i} ) =>{
        return (
         <View style={{flex:1,paddingTop:30}}>
           <ListItem 
           
           bottomDivider>
               <ListItem.Content >
           <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }} >{item.book_name}</ListItem.Title>
           <ListItem.Subtitle >
      {item.reason_to_request}
    </ListItem.Subtitle>
  
    
            
    </ListItem.Content>
    <TouchableOpacity style={styles.button}
    onPress={()=>{
      this.props.navigation.navigate("ReceiverDetails",{"details":item});
      console.log("Inside onpress")
    }} >
                 <Text style={{color:'#ffff'}}>View</Text>
               </TouchableOpacity>
    
</ListItem>
</View>
        )
      }
    
    render(){
        return(
            <View style={{flex:1}}>
                  <MyHeader title="Donate Books" navigation ={this.props.navigation}/>
              <View style={{flex:1}}>
                {
                  this.state.requestedBooksList.length === 0
                  ?(
                    <View style={styles.subContainer}>
                      <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
                    </View>
                  )
                  :(
                  
                    <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.state.requestedBooksList}
                      renderItem={this.renderItem}
                    />
                 
                  )
                }
              </View>
            </View>
          )
    }
}


const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:"center",
      marginTop:100
    },
    button:{
     
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })