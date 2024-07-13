import { Button, Text, TextInput, View } from "react-native";
import { Image, StyleSheet, Platform,ScrollView } from 'react-native';
import { Carousel, Checkbox } from "antd";
import { SnippetsOutlined,AppleOutlined, ArrowUpOutlined } from '@ant-design/icons';
import React, { useState } from "react";


export default function Index() {
  
    const onChange = (currentSlide: number) => {
    };

    const AdmissionForm = () => {
      const [agree, setAgree] = useState(false);}
  return (
    <ScrollView>
    <View>
    <View style={styles.full}>
      <View style={styles.navBar} >
        <Text style={styles.navItem} >One</Text>
        <Text style={styles.navItem} >Two</Text>
        <Text style={styles.navItem} >Three</Text>
        <Text style={styles.navItem} >Four</Text>
      </View>  
    </View>
    <View >
      <Carousel afterChange={onChange}>
      <div >
        <div style={styles.carousel}>
          <Text style={styles.content}>
            <h2>Content Here!</h2>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum? Reprehenderit labore tempore facilis ut pariatur amet qui vitae assumenda velit nam harum, ipsa molestias, eos natus officiis esse numquam.</h5>
            <br />
            <br />
            <h3>Description</h3>
            </Text>
        <Image style={styles.img}  source={require('../assets/images/splash.png')} ></Image>
        </div>
      </div>
      <div >
        <div style={styles.carousel}>
        <Text style={styles.content}>
            <h2>Content Here!</h2>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum? Reprehenderit labore tempore facilis ut pariatur amet qui vitae assumenda velit nam harum, ipsa molestias, eos natus officiis esse numquam.</h5>
            <br />
            <br />
            <h3>Description</h3>
            </Text>
        <Image style={styles.img}  source={require('../assets/images/splash.png')} ></Image>
        </div>
      </div>
      <div >
        <div style={styles.carousel}>
        <Text style={styles.content}>
            <h2>Content Here!</h2>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum? Reprehenderit labore tempore facilis ut pariatur amet qui vitae assumenda velit nam harum, ipsa molestias, eos natus officiis esse numquam.</h5>
            <br />
            <br />
            <h3>Description</h3>
            </Text>
        <Image style={styles.img}  source={require('../assets/images/splash.png')} ></Image>
        </div>
      </div>
      <div >
        <div style={styles.carousel}>
        <Text style={styles.content}>
            <h2>Content Here!</h2>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum? Reprehenderit labore tempore facilis ut pariatur amet qui vitae assumenda velit nam harum, ipsa molestias, eos natus officiis esse numquam.</h5>
            <br />
            <br />
            <h3>Description</h3>
            </Text>
        <Image style={styles.img}  source={require('../assets/images/splash.png')} ></Image>
        </div>
      </div>
    </Carousel>
    </View>
    
    <div style={styles.third}>
      <div style={styles.ost}>
        <Image style={styles.img1} source={require('../assets/images/ad.jpeg')}/>
        <h4>Adesh:</h4>
        <h2>Shahi:</h2>
      </div>
      <div style={styles.ost}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <h4>Shahi:</h4>
        <h2>Adesh:</h2>
        </div>
        <Image style={styles.img1} source={require('../assets/images/ad.jpeg')}/>
      </div>
      <div style={styles.ost2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores minima consectetur nulla enim dolorum soluta vel eum aliquam dolore expedita nesciunt quaerat consequatur, architecto maiores. Sint ad quaerat enim reprehenderit.
      </div>
    </div>
    
    <div style={styles.third1}>
      <div style={styles.ost3}>
      <SnippetsOutlined style={{fontSize:90}}/>
        <h3>Adesh</h3>
        <ul>
          <li style={{fontSize:25}}>one</li>
          <li style={{fontSize:25}}>two</li>
          <li style={{fontSize:25}}>three</li>
          <li style={{fontSize:25}}>four</li>
        </ul>
      </div>
      <div style={styles.ost3}>
      <SnippetsOutlined style={{fontSize:90}}/>
        <h3>Adesh</h3>
        <ul>
          <li style={{fontSize:25}}>one</li>
          <li style={{fontSize:25}}>two</li>
          <li style={{fontSize:25}}>three</li>
          <li style={{fontSize:25}}>four</li>
        </ul>
      </div><div style={styles.ost3}>
      <SnippetsOutlined style={{fontSize:90}}/>
        <h3>Adesh</h3>
        <ul>
          <li style={{fontSize:25}}>one</li>
          <li style={{fontSize:25}}>two</li>
          <li style={{fontSize:25}}>three</li>
          <li style={{fontSize:25}}>four</li>
        </ul>
      </div>
    </div>

    <View style={styles.back}>
      <Text style={{textAlign:'center'}}><h2>Introduction</h2></Text>
      <div style={{display:'flex',gap:20,margin:40, marginBottom:0}}>
      <Image style={styles.ost6} source={require('../assets/images/library.jpeg')}></Image>
      <Image style={styles.ost7} source={require('../assets/images/library2.jpeg')}/>
      <Image style={styles.ost8} source={require('../assets/images/library.jpeg')}/>
      </div>
    </View>
    
    <div style={styles.third3}>
      <Text style={[styles.ost5,styles.selected]}>one 
        <Text style={styles.arrow}></Text></Text>
      <div style={styles.ost5}>two</div>
      <div style={styles.ost5}>three</div>
      <div style={styles.ost5}>four</div>
      <div style={styles.ost5}>five</div>
      <div style={styles.ost5}>six</div>
    </div>

    <View style={styles.logo}>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
      <div style={{display:'flex',flexDirection:'column', textAlign:'center'}}><AppleOutlined style={{fontSize:120}}/>Apple</div>
    </View>

    <View style={styles.form}>
      <div style={styles.box}>
        <h2 style={styles.about}>About It <br /> <br />More Details</h2>
      </div>
      <div style={styles.box1}>
        <center><h2>Admission Form</h2></center>
        <form style={styles.form1}>
          <View style={styles.fullnameWrapper}>
          <TextInput style={styles.fullname} placeholder="FullName"/>
          </View>
          <View style={{flexDirection:'row', gap:20, marginTop:20}}>
          <View style={styles.addressWrapper}> 
          <TextInput style={styles.address} placeholder="Address"/>
          </View>
          <View style={styles.contactWrapper}>
          <TextInput style={styles.contact} placeholder="Contact"/>
          </View>
          </View>
          <View style={styles.fullnameWrapper}>
          <TextInput style={styles.email} placeholder="Email"/>
          </View>
          <View style={styles.fullnameWrapper}>
          <TextInput style={styles.desc} placeholder="Description"/>
          </View>
          <View style={styles.check}>
          <Checkbox style={{width:'5%'}}/>
          <Text style={{color:'white'}}>I agree all the terms and conditions</Text>
          </View>
          <View style={styles.button}>
            <Button title="Submit"></Button>
          </View>
        </form>
      </div>
      </View>
      <View style={styles.footer} >
        <div style={styles.foot}><h5>Adesh</h5><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius quasi eaque saepe mollitia sint esse et labore eveniet neque nesciunt iusto quos repellendus impedit, laboriosam magni? Corporis, assumenda culpa.</h6></div>
        <div style={styles.foot1}><h5>Shahi</h5><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius quasi eaque saepe mollitia sint esse et labore eveniet neque nesciunt iusto quos repellendus impedit, laboriosam magni? Corporis, assumenda culpa.</h6></div>
        <div style={styles.foot2}><h5>Thakuri</h5><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius quasi eaque saepe mollitia sint esse et labore eveniet neque nesciunt iusto quos repellendus impedit, laboriosam magni? Corporis, assumenda culpa.</h6><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius quasi eaque saepe mollitia sint esse et labore eveniet neque nesciunt iusto quos repellendus impedit, laboriosam magni? Corporis, assumenda culpa.</h6></div>
        <div style={styles.foot3}><ArrowUpOutlined /></div>
      </View>
    
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  carousel:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:0,
    marginTop:30,
    marginLeft:50,
    marginRight:50,
    height: 500,
    color: '#fff',
    lineHeight: 160,
    textAlign: 'center',
    borderRadius:35,
    backgroundColor: '#364d79',
  },
  img:{

    height:1500,
    width:200
  },
 full:{
  backgroundColor:'black'
 },
 navBar:{
  display:"flex",
  justifyContent:"center",
  flexDirection:"row",
  marginVertical:20,
  paddingVertical:10,
  gap:10,
  backgroundColor:'#4b3f3f',
  borderRadius:50,
  width:500,
  right:-1400
 },
 navItem:{
  padding:40,
  backgroundColor:"#000",
  paddingVertical:20,
  color:"grey",
  borderRadius:50
 },
 content:{
    // padding:'auto',
    // margin:'auto',
    marginTop:0,
    marginLeft:80,
    right:400,
    // backgroundColor:'red',
    // borderRadius:90,
    height:300,
    width:800
 },
 text:{
  justifyContent:'center',
  alignContent:'center'
 },
 third:{
  // position:'relative',
  display:'flex',
  gap:20,
  padding:100,
  // paddingVertical:50,
  // paddingHorizontal:80,
  backgroundColor:'black',
  color:'white',
  // height:500,
  // width:1800,
  marginTop:30,
  marginLeft:50,
  marginRight:50,
  borderRadius:50,
 },
 ost:{
  display:'flex',
  flexDirection:'column',
  width:'25%'
 },
 ost2:{
  width:'50%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
 },
 third1:{
  display:'flex',
  gap:20,
  padding:0,
  color:'white',
  marginTop:30,
  marginLeft:50,
  marginRight:50,
  borderRadius:50,
 },
 ost3:{
  width:'33%',
  padding:35,
  flexDirection:'row',
  // display:'flex',
  // justifyContent:'space-around',
  // alignItems:'center',
  backgroundColor:'red',
  borderRadius:50,
  // height:400
 },
 img1:{
  // height:400,
  width:'100%'
 },
 third3:{
  display:'flex',
  justifyContent:'space-between',
  marginTop:100,
  marginLeft:200,
  marginRight:200,
  backgroundColor:'black',
  borderRadius:50,
  color:'white',
 },
 ost5:{
  padding:40,
  
  width:'100%',
  textAlign:'center'
 },
 selected:{
  backgroundColor:'grey',
  borderTopLeftRadius:50,
  borderBottomLeftRadius:50,
  position:'relative',
 
 },
 arrow:{
  height:30,
  width:30,
  backgroundColor:'grey',
  position:'absolute',
  bottom:-15,
  left:'45%',
  transform:[{rotate:'45deg'}]
 },
 logo:{
  backgroundColor:'black',
  marginTop:40,
  marginLeft:'25%',
  marginRight:'25%',
  color:'white',
  padding:40,
  paddingLeft:70,
  columnGap:100,
  rowGap:30,
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap'
 },
 back:{
  // display:'flex',
  backgroundColor:'grey',
  marginTop:50,
  // justifyContent:'space-between'
 },
 ost6:{
  backgroundColor:'yellow',
  height:400,
  borderRadius:20,
  width:'33%'
 },ost7:{
  backgroundColor:'blue',
  height:400,
  borderRadius:20,
  width:'33%'
 },ost8:{
  backgroundColor:'green',
  height:400,
  borderRadius:20,
  width:'33%'
 },
 form:{
  display:'flex',
  flexDirection:'row',
  backgroundColor:'black',
  marginHorizontal:30,
  marginTop:50,
  color:'white',
  borderRadius:30,
  overflow:'hidden'
 },
 box:{
  paddingLeft:50,
  paddingTop:500,
  paddingBottom:50,
  width:'50%',
  backgroundColor:'grey'
 },
 box1:{
  color:'white',
  width:'50%',
  paddingTop:60,
  margin:50
 },
 form1:{
  width:'100%',
  
 },
 fullname:{
  marginTop:50,
  fontSize:24,
  color:'white',
  width:"100%",
  outlineWidth:0
  // borderRightWidth:0,
  // borderTopWidth:0
  // borderBottomColor:'white',
  // borderRightStyle:'none',
  // borderLeftStyle:'none',
  // borderTopStyle:'none'
 },
 fullnameWrapper:{
  borderWidth:1,
  borderStyle:'solid',
  borderBottomColor:'white',
  borderRightStyle:'none',
  borderLeftStyle:'none',
  borderTopStyle:'none'
 },
 addressWrapper:{
  flexDirection:'row',
  width:'50%',
  marginTop:10,
  borderWidth:1,
  borderStyle:'solid',
  borderBottomColor:'white',
  borderRightStyle:'none',
  borderLeftStyle:'none',
  borderTopStyle:'none'
 },
 contactWrapper:{
  flexDirection:'row',
  width:'48%',
  marginTop:10,
  borderWidth:1,
  borderStyle:'solid',
  borderBottomColor:'white',
  borderRightStyle:'none',
  borderLeftStyle:'none',
  borderTopStyle:'none'
 },
 address:{
  width:"100%",
  fontSize:24,
  color:'white',
  outlineWidth:0
 },
 contact:{
  width:"100%",
  fontSize:24,
  color:'white',
  outlineWidth:0
 },
 email:{
  marginTop:35,
  fontSize:24,
  color:'white',
  width:"100%",
  outlineWidth:0
 },
 desc:{
  marginTop:50,
  fontSize:24,
  color:'white',
  width:"100%",
  outlineWidth:0
 },
 check:{
  marginTop:30,
  flexDirection:'row'
 },
 about:{
  
 },
 button:{
  alignSelf: 'flex-start',
  width:'15%',
  marginTop:20,
  // paddingVertical: 10,
  // paddingHorizontal: 20,
  backgroundColor: '#007bff',
  borderRadius: 25,
 },
 footer:{
  display:'flex',
  flexDirection:'row',
  // justifyContent:'space-around',
  padding:30,
  margin:50,
  backgroundColor:'black',
  marginTop:50,
  borderRadius:50,

 },
 foot:{
  color:'white',
  flexDirection:'column',
  width:'10%',
  marginLeft:190
 },
 foot1:{
  color:'white',
  flexDirection:'column',
  width:'20%',
  marginLeft:90
 },
 foot2:{
  color:'white',
  flexDirection:'column',
  width:'20%',
  marginLeft:90
 },
 foot3:{
  color:'white',
  flexDirection:'column',
  fontSize:25,
  marginTop:130,
  marginLeft:300
 }
});