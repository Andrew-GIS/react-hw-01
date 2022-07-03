import styled from "@emotion/styled";

export const Conteiner = styled.div`
display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0px auto;
	// background-color: #dbe7fb;
	border-radius: 10px;
	min-width: 400px;

// display: flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
// background-color: #dbe7fb;
// margin: 50px 500px 0px 500px;
// border-radius: 10px;
// min-width: 400px;
`;

export const Title = styled.h2`
margin-right: auto;
margin-left: auto;
margin-bottom: 10px;
text-transform: uppercase;
color: gray;
`;

export const StatisticList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
margin-right: auto;
margin-left: auto;
padding: 0px;
//margin: 0px;
background-color: #a4e0f4;
z-index: 2;
`;

export const StatisticLi = styled.li`
display: flex;
flex-direction: column;
padding: 10px;
border-width: 5px 1px;
border: solid gray;
color: white;
&:hover {
	background-color: wheat;
}
`;

export const DataFormat = styled.span`
color: black;
font-size: 10px;
&:hover{
	color: black;
}
`;

export const Percentage = styled.span`
color: black;
font-size: 15px;
`;