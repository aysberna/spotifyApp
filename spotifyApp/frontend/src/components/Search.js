import React, { useEffect, useState } from "react";
import { 
    Button,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Image
 } from '@material-ui/core';
 import { Card } from 'react-bootstrap';

import axios from "axios";

const Search =  () => {
    const [listData, setData] = useState([]);
    const [searchtext, setSearchText] = useState("");

    const getList = async () => {
      const responseList = await axios.get(`http://localhost:8000/tracks/${searchtext}/`);
      setData(responseList.data.artists.items)
      console.log('======list', listData)
      }

  return (
    <div>
      <h1>Search on Spotify with Genre</h1>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        name="searchtext"
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
       <div>
        <Button variant="contained" color="primary" onClick={getList}>
          Search
        </Button>{" "}
      </div>
  {/* <Link to={`/${searchtext}`}>
        {" "} */}
      {listData ?
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">External url</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.external_urls.spotify}</TableCell>
              <Card.Img variant="top" src={row.images[0].url} height= "50" width="50" alt="" />
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    : <></>}

    </div>
  );
};

export default Search;
