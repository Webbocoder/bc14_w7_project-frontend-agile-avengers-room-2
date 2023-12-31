/* - Set a hardcoded array for the subjects that we want to show within the SubjectCard 'tiles' (subjectList). This will be held in app.js.✅ 
- For each item in the array, we want to return a button.✅ 
- Use the .map() method to iterate over the subjectList array and output a SubjectCard component for each index. ✅ 
- Still to do: Define function for button clicks.
*/

/*Plan for onClick functions
    // When user clicks on the subject, we want the question card to update with the first question of the list of questions with that subject key.
    // Two options: We could have filtered arrays for all subjects and the correct one is called if that is the subject that has been clicked or we could filter the total array with the correct subject when the button has been clicked.
        //Use .filter() method to filter array by subject key.
        // Display first question from the filtered array, in the question paragraph.
*/

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import flashcard from "./flashcard.png";

function SubjectCard({ subject, displayQuestion, setCurrentSubject }) {
  return (
    <div className="Subject-Card-div">
      <Card
        className="Subject-Card"
        style={{
          padding: "2rem",
          width: "200px",
          border: "1px solid black",
          height: "230px",
        }}
      >
        <CardActionArea>
          <CardMedia alt="flashcard" component="img" image={flashcard} />
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h6" component="h6">
              {subject}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="medium"
            color="primary"
            onClick={() => {
              setCurrentSubject(subject);
              displayQuestion(subject);
            }}
          >
            Question Me!
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default SubjectCard;
