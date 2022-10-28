import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../app-config';
import { call } from '../../service/ApiService';
import '../Student/Student.css';

function StudentApply() {

    const [name, setName] = useState("");
    const [application, setApplication] = useState("");
    const [major, setMajor] = useState("");
    const [schoolnumber, setSchoolnumber] = useState("");
    const [school, setSchool] = useState("")
    const [file, setFile] = useState("");

    const ACCESS_TOKEN = "ACCESS_TOKEN";
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    async function SubmitBtn(e) {
        
        e.preventDefault();

        setApplication("test");

        console.log(localStorage.getItem("ACCESS_TOKEN"));

        const formData = new FormData();
        const data = {
            name: name,
            application: application,
            major: major,
            schoolNumber: schoolnumber,
            school: school,
        }
        formData.enctype = "multipart/form-data";
        formData.append("file", file);
        console.log(file);

        await call("/apply/applicant-data","POST",data).then((res)=>{console.log(res);});
        await axios({
            method:"POST",
            url:API_BASE_URL + "/apply/applicant-application",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + accessToken, 
            },
        }).then((res) => {
            if(res.status === 200) {
                console.log(res);
                alert("POST SUCCESS");
                window.location.href = "/";
            }
        });
    }
    useEffect(() => {
        const ACCESS_TOKEN = "ACCESS_TOKEN";
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        console.log(accessToken);
        axios({
            method:"GET",
            url:API_BASE_URL + "/apply/checkApplicant",
            data: null,
            headers: {
                "Authorization":"Bearer " + accessToken
            }
        }).then((res)=>{
            if(res.status === 200) {
                console.log(res.data);
                if(res.data.error === "400") {
                    alert("이미 지원하셨습니다.");
                    window.location.href="/";
                }
            }
        });
    },[])
    
    return(<div className="apply-total">
        <div className="apply-title">
            <h1>지원하기</h1>
        </div>
        <div className="apply-container">
            <ul>
                <li>
                    <p className="apply-text">이름</p>
                    <input className="apply-name" name="name" onChange={(e) => {setName(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학교</p>
                    <input className="apply-school" name="school" onChange={(e) => {setSchool(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학과</p>
                    <input className="apply-major" name="major" onChange={(e) => {setMajor(e.target.value)}} placeholder='한글로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">학번</p>
                    <input className="apply-schoolnumber" name="schoolnumber" onChange={(e) => {setSchoolnumber(e.target.value)}} placeholder='숫자로 공백없이 입력해주세요.'></input>
                </li>
                <li>
                    <p className="apply-text">첨부파일</p>
                    <input className="apply-file" type="file" id="file" name="file" onChange={(e) => {setFile(e.target.files[0])}}></input>
                    <p className="file-detail">Webkit640 지원양식은 공지사항에서 다운로드하세요.</p>
                </li>
            </ul>
            <div className="apply-submit">
                <button className="apply-submit-btn" onClick={SubmitBtn}>제출하기</button>
            </div>
        </div>
    </div>)
}

export default StudentApply;