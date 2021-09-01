import React, { useState, useEffect, VFC} from 'react';
import {
  makeStyles,
  Container,
  Box,
  Icomoon,
  Button,
} from '@e-group/material';
// import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { RouteConfigComponentProps } from "react-router-config";
import { Question as QuestionType } from 'typings';
import Main from '@e-group/material-layout/Main';
import AppBar from "@material-ui/core/AppBar";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import NewSidebar, { RouteItemPropsType } from 'components/NewSidebar';
import clsx from "clsx";
import SurveyContainer from './components/SurveyContainer'
import SurveyEditorBody from './SurveyEditorBody'
import Question from './components/Question'
import data from './data';
import UserNavbar from '../Usernavbar/UserNavbar'
import QuestionEditable from './components/QuestionEditable'
import SurveyBody from './components/SurveyBody'
import SurveyEditorTitle from './SurveyEditorTitle';

const drawerWidth = 104;
const useStyles = makeStyles((theme) => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
  appbar: {
    flexDirection: 'row-reverse',
    background: 'transparent',
  },
  mainheader: {
    color: 'black',
    background: 'transparent',

  },
  wrapper: {
    display: "flex",
    minHeight: "100vh",
  },
  mainPanel: {
    width: `calc(100% - 104px)`,
    minHeight: "100vh",
    float: "right",
    background:"#05c7f2",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  mainPanelShift: {
    marginLeft: "0",
    width: `calc(100% - ${drawerWidth}px)`,
    minHeight: "100vh",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - 104px)`,
    },
  },
  mainContentPanel: {
    borderTopLeftRadius:"40px",
    borderBottomLeftRadius:"40px",
    width:"100%;",
    height:"100%",
    background:"#f5f6fa"
  },
  addButton: {
    '& button': {
      borderRadius: '30px',
    },
    "& .MuiButtonBase-root": {
      background: "#05c7f2",
      color: "white",
      textTransform: "none",
      padding:" 4px 16px",
      boxShadow:  '0px 0px 10px -1px #12c4ea',
    },
    '& button > *:first-child': {
      fontSize: "18px",
    },
    "& .MuiButton-startIcon":{
      marginRight:"0",
    },
    "& .MuiButton-iconSizeMedium > *:first-child":{
      fontSize: "40px",
    },
  },
  buttonwrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  
}));

// const reorder = (
//   list: any[],
//   startIndex: number,
//   endIndex: number
// ): any[] => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//   return result;
// };
const reorder = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: any[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
  

const SurveyEditor : VFC<RouteConfigComponentProps> = ({ route }) => {
  const classes = useStyles();
  // const [selectedQuestionId, setSelectedQuestionId] = useState<string>();
  const [controledQuestions, setControledQuestions] = useState<QuestionType[]>(data);

  const openSidebar = true;
  const [isMobile, setIsMobile] = React.useState(false);

  const resizeFunction = () => {
    if (window.innerWidth < 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const onDragEnd = (result: DropResult): void => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items: QuestionType[] = reorder(
      controledQuestions,
      result.source.index,
      result.destination.index
    );

    setControledQuestions(items);
  };

  useEffect(() => {
    resizeFunction();
    window.addEventListener("resize", resizeFunction);

    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  return (
    <Box className={classes.wrapper}>
      <NewSidebar
        openSidebar={openSidebar}
        routes={route?.routes as RouteItemPropsType[]}
        isMobile={isMobile}
      />
      <Box
        className={clsx(
          { [classes.mainPanelShift]: openSidebar },
          classes.mainPanel
        )}
      >
        <Box
          className={ classes.mainContentPanel }
        >
          <AppBar
          position="relative"
          className={classes.appbar}
          elevation={0}
        >
          <UserNavbar/>
        </AppBar>
        <Main> 
          {/* style={{ maxWidth: 1920,paddingLeft:'50px',}} */}
          <Container maxWidth="xl">
            <SurveyContainer>
              <SurveyEditorBody >
                
                <SurveyBody>
                  <div>
                    <SurveyEditorTitle />
                  </div>
                  
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="survey">
                    {(dropProvided) => (
                      <div {...dropProvided.droppableProps}>
                        <div ref={dropProvided.innerRef}>
                          {controledQuestions.map((question, index) => (
                            <Draggable
                              draggableId={question.questionId}
                              key={question.questionId}
                              index={index}
                            >
                              {(dragProvided) => (
                                <div
                                  ref={dragProvided.innerRef}
                                  {...dragProvided.draggableProps}
                                >
                                {/* {question.questionId === selectedQuestionId ? ( */}
                                {question.questionType === 'titleBlock' || question.questionType === 'choiceone' ? (  
                                  <QuestionEditable
                                    DragHandleProps={dragProvided.dragHandleProps}
                                    question={question}
                                  />
                                  ) : (
                                    <Question
                                      DragHandleProps={dragProvided.dragHandleProps}
                                      // onClick={() =>
                                      //   setSelectedQuestionId(question.questionId)
                                      // }
                                      question={question}
                                    />
                                  )} 
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {dropProvided.placeholder}
                        </div>
                      </div>
                    )}
                  </Droppable>
                </DragDropContext> 
              {/* <SurveyToolbar
                className={classes.toolbar}
                tools={['createQuestion']}
              /> */}
              <div className={classes.buttonwrapper}>
                <Button
                  variant="contained"
                  // rounded
                  className={classes.addButton}
                  startIcon={<Icomoon type="add" />}
                >
                  Add
                </Button>
              </div>
              </SurveyBody>
              </SurveyEditorBody>
            </SurveyContainer>
          </Container>
        </Main>
        </Box>
      </Box>
    </Box>
  );
};

export default SurveyEditor;
