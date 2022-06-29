import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function PostFooter(props) {
  return (
    <View>
      <View style={styles.container}>
        
        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_heart.png")} />
        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_comment.png")} />
        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_send.png")} />

        <View style={{flexGrow: 1}}/>

        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_save.png")} />

      </View>

      <View style={styles.commentsContainer}>

        <View style={styles.txtContainer}>
          <Text>Curtido por </Text>
          <Text style={styles.txtBold}>vw</Text>
          <Text>, </Text>
          <Text style={styles.txtBold}>gm_opala</Text>
          <Text> e </Text>
          <Text style={styles.txtBold}>outras pessoas.</Text>
        </View>

        <Text style={styles.txtContainer}>
          <Text style={styles.txtBold}>fusca</Text>
          <Text> </Text>
          <Text style={styles.hashtag}>#AirCooledSQN</Text>
          <Text> </Text>
          Pra quem pediu, está aí o besouro repousando no fim de tarde... 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 1,
    backgroundColor: 'white',
  },

  //actions could be groped to avoid the empty View with flexGrow

  action: {
    margin: 8,
  },

  commentsContainer: {
    flexDirection: 'column',
    marginHorizontal: 8,
  },  

  txtContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    flexWrap: 'wrap',
  },

  txtBold: {
    fontWeight: 'bold',
  },

  hashtag: {
    color: 'rgb(50,50,100)',
  }
});