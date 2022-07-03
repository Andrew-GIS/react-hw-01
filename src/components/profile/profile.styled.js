import styled from "@emotion/styled";

export const Profile = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 100px 250px 0px 250px;
	`;

export const Description = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: #dbe7fb;
	padding: 50px 50px 20px 50px;
	margin: 0px;
	margin-bottom: 5px;
	width: 400px;
	border-radius: 25%;
	
`;

export const Avatar = styled.img`
	width: 300px;
	height: 300px;
	margin: 2px;
	border-radius: 50%;
	border: dashed red;
`;

export const Name = styled.h2`
    font-size: large;
    font-weight: 800;
    color: black;
    margin: 2px;`;


export const Tag = styled.p`
	font-size: medium;
	font-weight: 400;
	color: gray;
	margin: 2px;
`;

export const Location = styled.p`
	font-size: medium;
	font-weight: 400;
	color: gray;
	margin: 2px;
`;

export const Stats = styled.ul`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	background-color: wheat;
	padding: 0px;
	margin: 0px;
	border-radius: 5px;
	background-color: #dbe7fb;`;


export const Stat = styled.li`
width: 100%;
hight: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	// border: dashed red;
	padding: 10px;
	&:hover {
		background-color: wheat;
	}
`;

export const Label = styled.span`
	font-size: 15px;
	font-weight: 400;
	color: gray;
	margin: 2px;
`;

export const Quantity = styled.span`
	font-size: 24px;
	font-weight: 700;
	color: black;
	margin: 2px;`;