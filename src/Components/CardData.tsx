import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import "./CardData.css";
import Editform from "./Editform";

const CardData: React.FunctionComponent<{
  userData: any;
  handleDelete: any;
  data: any;
  setMoreDeatils: any;

  setPersonData: any;
}> = ({ userData, handleDelete, data, setMoreDeatils, setPersonData }) => {
  const [expanded, setExpanded] = React.useState(false);

  const [Articles, setArticles] = React.useState(0);
  const [Following, setFollowin] = React.useState(0);
  const [Followers, setFollowers] = React.useState(0);

  React.useEffect(() => {
    fetch(userData.url)
      .then((data) => data.json())
      .then((data) => {
        setFollowers(data.followers);
        setFollowin(data.following);
        setArticles(data.public_repos);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let arr = [
    Articles,
    Following,
    Followers,
    setArticles,
    setFollowin,
    setFollowers,
  ];

  return (
    <div className="card">
      {expanded === false && (
        <Card sx={{ maxWidth: 345 }}>
          <div>
            <CardHeader title={userData.login} subheader={userData.html_url} />
          </div>
          <CardMedia
            component="img"
            className="image"
            image={userData.avatar_url}
            alt="Paella dish"
          />
          <div className="tags">
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                articles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Articles}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                following
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Following}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                followers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Followers}
              </Typography>
            </CardContent>
          </div>
          <CardActions>
            <Button
              onClick={() => {
                setExpanded(true);
              }}
              size="small"
              variant="contained"
              className="btn"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                handleDelete(userData.id);
              }}
              size="small"
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
            <Button
              size="small"
              variant="contained"
              className="btn"
              onClick={() => {
                setMoreDeatils(true);
                setPersonData({
                  ...userData,
                  Followers,
                  Articles,
                  Following,
                });
              }}
            >
              View More
            </Button>
          </CardActions>
        </Card>
      )}
      {expanded && (
        <Editform
          arr={arr}
          data={data}
          userData={userData}
          setExpanded={setExpanded}
        />
      )}
    </div>
  );
};
export default CardData;
