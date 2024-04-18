import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default function List(props){

    function carregaIcones(likeada){
        return likeada ? require('../img/likeada.png'):
        require('../img/like.png')
    }

    function mostraLikes(likers){
        if(likers === 0){
            return;
        }

        return(
            <Text style = {styles.likes}>{likers}{likers > 1 ? 'curtidas' : 'curtida' }</Text>
        )
    }

    return(
        <View>
            <View style={styles.viewPerfil}>
                <Image
                source={{uri: props.data.imgperfil}}
                style={styles.fotoPerfil}
                />
                
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>

            <View>
            <Image
                resizeMode="contain"
                source={{uri: props.data.imgPublicacao}}
                style={styles.fotoPublicacao}
                />
            </View>

            <View style = {styles.areaBtn}>
                <TouchableOpacity>
                        <Image 
                            source={ carregaIcones(props.data.likeada) }
                            style = {styles.iconeLike}
                        />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.btnSend}>
                        <Image 
                            source={ require('../img/comment.png')}
                            style = {styles.iconeLike}
                        />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.btnSend}>
                        <Image 
                            source={ require('../img/send.png')}
                            style = {styles.iconeLike}
                        />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>
                {props.data.nome}
            </Text>

            <Text style={styles.descRodape}>
                {props.data.descricao}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
   
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems:'center',
        padding: 8
    },

    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },

    nomeUsuario:{
        paddingLeft: 5,
        fontSize:22,
        color: '#000'
    },

    fotoPublicacao: {
        height: 400,
        alignContent: 'center'
    },

    areaBtn: {
        flexDirection: 'row',
        padding: 8
    },

    iconeLike:{
        width: 25,
        height: 25
        
    },

    btnSend:{
        paddingLeft: 5
    },

    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    },

    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5
    },

    descRodape:{
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 15
    }
});