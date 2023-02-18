import { Button } from "../../components/shared/Button";
import REModal from "react-overlays/Modal";
import { Icon } from '@iconify/react';
import './styles.css';
import { useEffect, useState } from "react";
import Logo from '../../../src/assets/images/logo.jpg'
import styled from "styled-components";
import { signUpServices } from "../../api/services/signup";
import { updateServices } from "../../api/services/update";
import axios from "axios";

export default function Modal() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3000/user',
            );
            console.log(result);
            setData(result.data.token);
        };
        fetchData();
    }, []);
  
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [tell, setTell] = useState("")
    const [email, setEmail] = useState("")
    const [homepage, setHomepage] = useState("")
    const [picture, setPicture] = useState("")
    const [adress, setAdress] = useState("")

    const [newThem, setNewThem] = useState('');
    const render = () => {
        console.log(updateServices());

    }
    
    let [newModal, setNewModal] = useState({
        // id,
        theme: 'rgb(255, 0, 0)',
        name,
        job,
        tell,
        email,
        homepage,
        adress,
        picture,
    });
    if (data) {newModal=data}

    document.body.style = `background: linear-gradient(50deg, ${newModal?.theme} 10%, rgba(255, 255, 255, 0)0%), linear-gradient(50.49deg, rgba(30, 27, 27, 1) 20%, rgba(255, 255, 255, 0)0%), linear-gradient(50.84deg, ${newModal.theme}30%, rgba(255, 255, 255, 0)0%), linear-gradient(230.56deg,  ${newModal.theme} 10%,rgba(255, 255, 255, 0) 0%),linear-gradient(230.56deg,  rgba(30, 27, 27,1) 20%,rgba(255, 255, 255, 0)0%) ;`
    const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
    const Profile = styled.div`:before {
    top: 0;
    left: 0;
    right: 00%;
    bottom: 00%;
    border-radius: 50%;
    border-top: 3px solid ${newModal.theme};
    border-left: 3px solid ${newModal.theme};
  }`
    const Button = styled.button`
  background-color: ${newModal?.theme};
  font-size:2rem;
  padding:1rem 1.5rem;

  
  `

    const handelShowModal = () => {
        console.log("object");
    }

    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const handleClose = () => setShowModal(false);

    const handleSuccess = () => {
        setShowModal(false)
        if (newThem) {
            const red = parseInt(newThem?.substring(1, 3), 16);
            const green = parseInt(newThem?.substring(3, 5), 16);
            const blue = parseInt(newThem?.substring(5, 7), 16);
            var rgb = `rgb(${red},${green},${blue})`
        }
        else {
            var rgb = 'rgb(255, 0, 0)'
        }
        // function blobToBase64(blob) {
        //     return new Promise((resolve) => {
        //         const reader = new FileReader();
        //         reader.onloadend = () => resolve(reader.result);
        //         reader.readAsDataURL(blob);
        //     });  
        // }
        // blobToBase64(newModal.picture).then(res => {
        //     setNewModal({...newModal, picture : res})})
        // setNewModal({ ...newModal, theme:rgb, name, job, adress, tell, email, homepage, picture })
        setNewModal({
            name,
            job,
            adress,
            tell
            , email
            , homepage
            , picture
            , theme: rgb
        })
        newModal = {
            theme: rgb,
            name,
            job,
            adress,
            tell
            , email
            , homepage
            , picture
        }
        signUpServices(JSON.stringify(newModal))

    };
    return (
        <>
            <Main >
                <div className="section">
                    <div className="profile-sec">
                        <Profile style={{ backgroundImage: `url(${newModal.picture} )` }} className="profile">
                        </Profile>
                        <div className="profile-box" style={{ backgroundImage: { Logo } }} >
                            <img className="img" src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="form-section">
                        <h1> {newModal.name}</h1>
                        <h3> {newModal.job}</h3>
                        <div className='form'>
                            <div className="form-value">
                                <span>
                                    <Icon icon="material-symbols:call-sharp" color="#212121" />
                                </span>
                                <a href={`tel::${newModal.tell}`}> {newModal.tell}</a>
                            </div>
                            <div className="form-value">
                                <span>
                                    <Icon icon="material-symbols:mail-rounded" color="#212121" />
                                </span>
                                <a href={`mailto::${newModal.email}`}> {newModal.email}</a>
                            </div>
                            <div className="form-value">
                                <span>
                                    <Icon icon="jam:world" />
                                </span>
                                <a href={newModal.homepage}> {newModal.homepage}</a>
                            </div>
                            <div className="form-value">
                                <span>
                                    <Icon icon="material-symbols:location-on" color="#212121" />
                                </span>
                                <a>{newModal.adress}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="show-button">
                    <Button onClick={() => setShowModal(true)} >My inputs</Button>
                </div>
            </Main>
            <div className="modal-example">
                <REModal
                    className="modal"
                    show={showModal}
                    onHide={handleClose}
                    renderBackdrop={renderBackdrop}>
                    <div>
                        <div className="modal-header">
                            <h3 >My inputs</h3>
                            <div>
                                <span className="close-button" onClick={handleClose}>
                                    x
                                </span>
                            </div>
                        </div>
                        <div className="modal-desc">
                            <form className="form">
                                <label htmlFor="favcolor">Select your favorite color:</label>
                                <input onChange={(e) => setNewThem(e.target.value)} className="inputs" type="color" id="favcolor" name="favcolor" />
                                <label htmlFor="name" >Enter your name:</label>
                                <input placeholder="Enter your name" type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="job">Enter your job:</label>
                                <input placeholder="Enter your job" type="text" name="job" id="job" onChange={(e) => setJob(e.target.value)} />
                                <label htmlFor="tel">Enter your tell number:</label>
                                <input placeholder="Enter your tell number" type="tel" id="tel" name="tel" onChange={(e) => setTell(e.target.value)} />
                                <label htmlFor="email">Enter your email:</label>
                                <input placeholder="Enter your email" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="homepage">Add your homepage:</label>
                                <input placeholder="Add your homepage" type="url" id="homepage" name="homepage" onChange={(e) => setHomepage(e.target.value)} />
                                <label htmlFor="adress">Add your company adress:</label>
                                <input placeholder="Add your company adress" type="text" id="adress" name="adress" onChange={(e) => setAdress(e.target.value)} />
                                <label htmlFor="picture">Add your picture:</label>
                                {/* <input type="file" id="picture" name="picture" onChange={(e)=>setFile(e)} /> */}
                                <form onChange={(e) => setPicture(e.target.value)} className="d-flex">
                                    <div className="d-block">
                                        <label htmlFor="pic-1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU" alt="" /></label>
                                        <input className="d-block" id="pic-one" type="radio" name="picture" value='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' />
                                    </div>
                                    <div className="d-block">
                                        <label htmlFor="pic-1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8c4-PbvcDHBdnhPBVUS0nNLjBw3ODVZaWA&usqp=CAU" alt="" /></label>
                                        <input className="d-block" id="pic-two" type="radio" name="picture" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8c4-PbvcDHBdnhPBVUS0nNLjBw3ODVZaWA&usqp=CAU" />
                                    </div>
                                    <div className="d-block">
                                        <label htmlFor="pic-1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSAxIB2kveTQEpUwuVCWQwo9bWWDnTv9liw&usqp=CAU" alt="" /></label>
                                        <input className="d-block" id="pic-three" type="radio" name="picture" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSAxIB2kveTQEpUwuVCWQwo9bWWDnTv9liw&usqp=CAU" />
                                    </div>
                                    <div className="d-block">
                                        <label htmlFor="pic-1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S7x-uPyVGyBxjUf5jqXgtILiU-6nprBTDw&usqp=CAU" alt="" /></label>
                                        <input className="d-block" id="pic-four" type="radio" name="picture" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S7x-uPyVGyBxjUf5jqXgtILiU-6nprBTDw&usqp=CAU" />
                                    </div>
                                </form>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="secondary-button" onClick={handleClose}>
                                Close
                            </button>
                            <Button className="primary-button" onClick={handleSuccess}>
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </REModal>
            </div>
        </>
    );
}
