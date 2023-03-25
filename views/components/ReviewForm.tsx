import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import COLORS from "../../data/colors";

const ReviewForm = ({ onReviewSubmit }) => {
    const [review, setReview] = useState('');


   function handleSubmit(){
       onReviewSubmit()
   }

    return (
        <View style={{borderStyle:"solid",borderWidth:2,borderColor:"white",margin:10}}>
            <Text style={{color:"white"}}>Review:</Text>
            <TextInput value={review} onChangeText={setReview} />
            <Button color={COLORS.secondary} title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default ReviewForm;