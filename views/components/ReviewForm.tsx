import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ReviewForm = ({ onReviewSubmit }) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = () => {
        const newReview = {
            name: name,
            rating: rating,
            review: review,
        };
        onReviewSubmit(newReview);
        setName('');
        setRating('');
        setReview('');
    };

    return (
        <View>
            <Text>Name:</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text>Rating:</Text>
            <TextInput value={rating} onChangeText={setRating} />

            <Text>Review:</Text>
            <TextInput value={review} onChangeText={setReview} />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default ReviewForm;