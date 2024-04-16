/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './src/Header/Index';
import List from './src/List/Index';


/*PRECISA INSTALAR NO SERVER LOCAL

*/

export default function App(){

 const [feed, setFeed] = useState([
    {
      id: 1,
      nome: 'Nerdbit Informática',
      descricao: 'Vamo que vamo!!',
      imgperfil: 'https://nerdbit.com.br/services/wp-content/uploads/2021/08/LOGO-NERDBIT-NOVA-300x75.png',
      imgPublicacao: 'https://scontent.fjdo10-1.fna.fbcdn.net/v/t39.30808-6/428637840_24908036548840995_6333031355441363241_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeELBq0d6nVRamWLCwTpW2MLGM_xHm4zw_gYz_EebjPD-Mpq-85qtrAGmmYp4SwkclWTi_tpci0_6DA6TY3sNk8r&_nc_ohc=t2Z8SgaItUMAb4uqGgz&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfDVH7t27QEz5i__ou1O3ggdj8CwWyfhg4A-YauFK_HYhA&oe=661F1C01',
      likeada: false,
      likers: 0
    },

    {
      id: 2,
      nome: 'Flavia Braga',
      descricao: 'O Senhor é o meu Pastor!!',
      imgperfil: 'https://nerdbit.com.br/services/wp-content/uploads/2021/08/FLAVIA.jpg',
      imgPublicacao: 'https://scontent.fjdo10-1.fna.fbcdn.net/v/t39.30808-6/435674898_25274359752208671_5188929535148234504_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFiDjuxSWY0TIzq1K0Wqdf3A_csoNTz6lwD9yyg1PPqXOP9hqFndKLCg02r_55HcI6JBCVbZNpJvFF0fF80i-uB&_nc_ohc=VZn8juEQTFoAb6WXbzw&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfC3Mny2WlihwxOl24KUgoq90HR-TZb0q7zpGjl08Uk3Xw&oe=661F25BF',
      likeada: true,
      likers: 5
    },

    {
      id: 3,
      nome: 'Andre Maia',
      descricao: 'O homem que encontra uma esposa, encontrou um bem precioso e recebe o o favor do Senhor!!',
      imgperfil: 'https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.6435-9/128994730_4790882390983041_292255801384216967_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDyR5xsu8RWpVugRZd6BaWaFhfsmEzkH5oWF-yYTOQfgSJhZYd_PlFBQzrTtW0sdcJh16t_BPARX1-XB3xJ-CU&_nc_ohc=ePjU-Sv8cSMAb7QCact&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfDhde4EDYCKIMSkV0Ue4s38GsorrLIejvBLq9NADmL1JQ&oe=6640B7B8',
      imgPublicacao: 'https://scontent.fjdo10-1.fna.fbcdn.net/v/t39.30808-6/353815323_9504727342931832_4584185468512285520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4y0EKRZg-DkqFDA_Q0V45Nm4wPFVXmTg2bjA8VVeZONgbuNpePWSTYLlUBXUoRQlBThoWRjyad1tD6jnyYS0a&_nc_ohc=tKyuy98HcdUAb7Pk7tX&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfDdaZLPymHAvTQe4KK6CK4VEWUXKSzAA96LzFQw9JUsUA&oe=661F23EF',
      likeada: true,
      likers: 40
    },
   

 ]);
  
  
  return(

      <View style={styles.container}>
          <Header/>

          <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={ (item) => item.id }
          data={feed}
          renderItem={ ( { item }) =>   <List data = {item}/>   }
          />

          

      
      </View>

   
      
   

  );
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({
container:{
  flex: 1,
  marginTop: 40,
  
},



});
