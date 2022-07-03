import styled from "@emotion/styled";

export const Table = styled.table`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 50px auto 0px auto;
	gap: 5px;
	font-family: 'helvetica neue', helvetica, arial, sans-serif;
	width: 500px;
	border-radius: 20px;
`;

export const TableHeaders = styled.tr`
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #dbe7fb;`;

export const TableHead = styled.tr`
	 font-family: 'Rock Salt', cursive;
	 border: solid #b3b3b3;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TableRow = styled.tr`
	border: 1px solid #dbe7fb;
	display: flex;
	flex-direction: row;
`;

export const TableData = styled.td`
	border: 1px solid #dbe7fb;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	&:hover{
		background-color: wheat;
		color: red;
	}
`;