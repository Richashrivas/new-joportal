import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import AdminApi, { url } from "../../WebService/AdminApi";
import CandidateApi, { candiUrl } from "../../WebService/CandidateApi";


export default function Profile()
{

    var [userProfile,setProfile] = useState([]);

    const userData = useSelector(state => state.canproinfo.value)

    console.log(userData)

    const nameBox =useRef()
    const numberBox =useRef()
    const emailBox =useRef()
    const passoutBox =useRef()
    const eduBox = useRef()

    // const dispatch = useDispatch()
   
   

    const Profile = async()=>{

        const response = await CandidateApi.GetApiCall(candiUrl.CANDIDATE_PROFILE)
        console.log("data ",response)

        // dispatch(canProfileReducer({...userData,id : response.data.data.id}))
        
    
    }

    useEffect(()=>{
        Profile();
    }, [])

    return<>
    <div className="container " style={{borderRadius:"10px", boxShadow:"0px 0px 15px lightgrey"}} >
        <div className="row">
            <div className="col-lg-12">
                <div className="section-tittle text-center">
                    <h2>My Profile</h2>
                </div>
            </div>
        </div>

    <div className="row">
        <div className="col-lg-4 col-md-60 " style={{borderRadius:"10px",boxShadow:"0px 0px 15px lightgrey"}}>
            <div className="single-process text-center mb-50 mt-10" >
              <div className="services-ion"  >
                <span className="flaticon-tour"></span>
              </div>
              <div>
                <p><b>Name : </b> </p> <p><b>Phone :</b> </p>
                <p><b>Email :</b> </p> <p><b>Education : </b> </p>
              </div>
            </div>
        </div>
        <div style={{borderRadius:"10px",boxShadow:"0px 0px 15px lightgrey"}} className="col col-lg-7 col-sm-12 col-md-12 mt-5  ">
            <form onSubmit={Profile}>
            <div className="col col-sm-6 mt-2" >
            </div>
            <div className=" row mb-3 ">
                <div className="col col-sm-6 " >
                    <label style={{fontSize:"18px",color:"black"}}>Name</label>
                    <input  type="text" className="form-control" ref={nameBox} placeholder="Enter Name" required/>
                </div>
                <div className="col col-sm-6" >
                <label style={{fontSize:"18px",color:"black"}}>Number</label>
                <input  type="text" className="form-control" ref={numberBox} placeholder="XXXXXXXXXX" required/>
                </div>
            </div>

            <div className=" row mb-3">
                <div className="col col-sm-6" >
                <label style={{fontSize:"18px",color:"black"}}>Email</label>
                <input  readOnly type="email" className="form-control" ref={emailBox} placeholder="Enter Email" required/>
                </div>
                <div className="col col-sm-6" >
                    <label style={{fontSize:"18px",color:"black"}}>Passout Year</label>
                    <input  readOnly type="passout" className="form-control" ref={passoutBox} placeholder="Enter Education" required/>
                </div>  
            </div>

            <div className=" row mb-3">
                <div className="col col-sm-6" >
                    <label style={{fontSize:"18px",color:"black"}}>Education</label>
                    <input  readOnly type="education" className="form-control" ref={eduBox} placeholder="Enter Education" required/>
                </div>
            </div>

            <div className=" row m-3">
            <div className="col col-sm-6 mt-2" >
            </div>
                <div className="col col-sm-6 mt-4" >
                    <button className="btn btn-info" type="submit">Update Profile</button>
                </div>
            </div>
            </form>
        </div>
    </div>  
    </div>
    </>
}