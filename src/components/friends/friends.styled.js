import styled from "@emotion/styled";

export const FriendList = styled.ul`
	display: flex;
	justify-content: center;
	padding: 15px;
	margin: 0;
	list-style: none;
	border-radius: 4px;
	background-color: #dbe7fb;
	margin: 50px 100px 0px 100px;
	border-radius: 10px;`;

export const Friend = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	border-radius: 25px;
	text-decoration: none;
	color: black;
	background-color: #fff;
	margin-right: 15px;
	&:hover{
		background-color: wheat;
	}
`;

export const FriendAvatar = styled.img`
	width: 150px;
	height: 150px;
	object-fit: contain;
	margin-bottom: 5px;	
`;

export const InfoWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center`;

export const FriendIsOnline = styled.span`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${props => {
	switch (props.Online) {
		case true: {
			console.log('green :>> ');
			return "green";
		}
		case false: {
			console.log('green :>> ');
			return "red";
		}
		default: return "yellow";
		}
	}}};
	`;

export const FriendName = styled.span`
	color: gray;
	font-size: 24px;`;