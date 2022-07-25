import { Button, Typography } from "@mui/material";
import "./Viewcard.css";

const Viewcard: React.FunctionComponent<{
  setMoreDeatils: any;
  personData: any;
}> = ({ setMoreDeatils, personData }) => {
  console.log(personData);

  return (
    <div className="viewcard1">
      <Button
        onClick={() => {
          setMoreDeatils(false);
        }}
        className="button"
      >
        X
      </Button>
      <div className="popup_data">
        <img src={personData.avatar_url} className="img" alt="" />
        <Typography variant="h6">Name: {personData.login}</Typography>
        <Typography variant="h6">Articles: {personData.Articles}</Typography>
        <Typography variant="h6">Following: {personData.Following}</Typography>
        <Typography variant="h6">Followers: {personData.Followers}</Typography>
        <Typography variant="h6">git: {personData.html_url}</Typography>
      </div>
    </div>
  );
};

export default Viewcard;
