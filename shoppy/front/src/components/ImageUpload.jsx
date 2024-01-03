import React from "react";
import { Form } from "react-bootstrap"
import axios from "axios";

export default function ImageUpload({getImage}){
    const formData = new FormData(); //file이 통째로 담김

    const FileUpload = (e) => {

    formData.append("file", e.target.files[0])
    for(const key of formData) console.log(`key---->>> ${JSON.stringify(key)}`);

    axios.post('http://127.0.0.1:8000/upload', formData)
        .then((result) => {
            getImage(result.data.path);
        });
    }
    
    return(
        <div>
        <Form.Control //Form.Control을 사용하면 type='file'일 때 multer와 호환
                type='file'
                className='shadow-none'
                accept='image/*'
                onChange={(e) => { FileUpload(e) }}></Form.Control>
        </div>
    )
}