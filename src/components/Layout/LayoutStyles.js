import styled from 'styled-components';
export const SideBarStyle = styled.div`
& .container{
    display:flex;
}
& main{
    width: 100%;
    padding: 20px;
    padding-top: 7rem;
}
& .sidebar{
    height: 100vh;
    width: 402px;
    transition: all 0.5s;
    padding-top: 7rem;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
@media (max-width:768px) {
    width:50px;
}
@media (min-width:769px) {
    width: 402px;
}
}
& .top_section{
    display: flex;
    align-items:center;
    justify-content: center;
    padding:20px 0; 
    width: 50px;
}
& .logo{
    font-size: 30px;
}
& .bars{
    display: flex;
    font-size: 25px; 
    color: #000; 
    transition: all 0.5s;
    @media (min-width:769px) {
        display: none;
    }
}
& .link{
    display: flex;
    padding: 10px 15px;
    margin:0 5%; 
    gap: 15px;
    transition: all 0.5s;
    font-size: 14px;
    color:#012A4A;
}
& .link:hover{ 
    transition: all 0.5s;
}
& .active{
    background-color: #DE3D6D;
    color: #fff; 
}
& .icon, & .link_text{
    font-size: 20px;
}
`