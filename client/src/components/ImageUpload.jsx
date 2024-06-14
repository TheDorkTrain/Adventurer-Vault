import {useState} from 'react';
import axios from 'axios';



function ImageUpload (){
    const [image, setImage] = useState('');
    const handleChange = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }
    const handleAPI = async (e) => {
        //call the API
        handleChange(e);
        const url = 'http://localhost:3001/api/image'
        const formData = new FormData()
        formData.append('image', image)
        axios.post(url, formData).then((res) => {
            console.log(res);
        })
    }
    return (
        <div>
            <img width={100} src={image === '' ? '' : URL.createObjectURL(image)} />        
            <h1>Image Upload</h1>
            <input type="file" onChange={handleAPI} />
        </div>
    );
}


export default ImageUpload;