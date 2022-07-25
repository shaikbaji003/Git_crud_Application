import { Button, Card, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Editform.css";

const Editform: React.FunctionComponent<{
  setExpanded: any;
  userData: any;
  data: any;
  arr: any;
}> = ({ setExpanded, userData, data, arr }) => {
  const [name, setName] = useState(userData.login);
  let setArticle = arr[3];
  let setFollowing = arr[4];
  let setFollowers = arr[5];
  const save = () => {
    // eslint-disable-next-line array-callback-return
    data.map((e: any) => {
      if (e.id === userData.id) {
        e["login"] = name;
        return e;
      }
    });
    setExpanded(false);
  };

  return (
    <>
      <Card className="edit_card">
        <Container>
          <div className="edit">
            <form>
              Name:
              <TextField
                className="textFeild"
                type="text"
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br></br>
              Articles:
              <TextField
                className="textFeild"
                value={arr[0]}
                onChange={(e) => setArticle(e.target.value)}
                type="number"
                variant="outlined"
              />
              <br></br>
              Following:
              <TextField
                className="textFeild"
                value={arr[1]}
                onChange={(e) => setFollowing(e.target.value)}
                type="number"
                variant="outlined"
              />
              <br></br>
              Followers:
              <TextField
                className="textFeild"
                value={arr[2]}
                onChange={(e) => setFollowers(e.target.value)}
                type="number"
                variant="outlined"
              />
              <br></br>
              <br></br>
              <Button
                variant="contained"
                onClick={() => {
                  save();
                }}
                className="btn"
              >
                Save
              </Button>
            </form>
          </div>
        </Container>
      </Card>
    </>
  );
};

export default Editform;
