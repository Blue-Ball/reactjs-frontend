import React, { FC, ChangeEvent, MouseEvent } from 'react';

import isLength from 'validator/lib/isLength';
import clsx from 'clsx';
import useInputActions from '@e-group/hooks/useInputActions';
import { Question, Option, QuestionType } from 'typings';
import {
  DropResult,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';

import {
  makeStyles,
  Tooltip,
  Paper,
  Grid,
  Switch,
  Typography,
  // FormControlLabel,
  TextField,
  MenuItem,
  Divider,
  InputAdornment,
  IconButton,
  Icomoon,
} from '@e-group/material';
import TitleIcon from '@material-ui/icons/Title';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckboxIcon from '@material-ui/icons/CheckBox';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import EmailIcon from '@material-ui/icons/Email';
import QuestionOptionsEditable from '../QuestionOptionsEditable';
import QuestionRatingEditable from '../QuestionRatingEditable';
import QuestionDragHandle from '../QuestionDragHandle';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1.5, 0),
    position: 'relative',
    overflow: 'hidden',
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
  },
  active: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 6,
    backgroundColor: '#05C7F2',
  },
  main: {
    padding: theme.spacing(0, 3),
  },
  content: {
    marginBottom: theme.spacing(4),
  },
  actions: {
    padding: theme.spacing(1, 0),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  select: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    lineHeight: `${theme.spacing(3)}px`,
  },
  menuItem: {
    padding: theme.spacing(1, 2),
    '& .MuiTypography-root': {
      lineHeight: `${theme.spacing(4)}px`,
      minWidth: theme.spacing(17),
    },
  },
  option: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  text: {
    width: '50%',
    marginBottom: theme.spacing(2),
  },
  radioGroup: {
    width: '58%',
  },
  textarea: {
    width: '58%',
    marginBottom: theme.spacing(2),
    '& label': {
      fontSize: 20,
      color: '#6B6B6B',
    },
    '& div textarea': {
      color: "#505050",
      fontSize: "18px",
      lineHeight: 2,
      fontWeight: 500,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  vertical: {
    margin: theme.spacing(0, 2),
    height: theme.spacing(4),
  },
  switch: {
    margin: 0,
  },
  ispc: {
    textAlign: "right",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  ismobile: {
    textAlign: "right",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  required: {
    padding:theme.spacing(2.5, 2),
  },
  subTitle: {
    '& label': {
      fontSize: 20,
      color: '#6B6B6B',
    },
    '& div textarea': {
      color: "#505050",
      fontSize: "18px",
      lineHeight: 2,
      fontWeight: 500,
    }
  },
}));

export type OptionType =
  | 'titleBlock'
  | 'text'
  | 'textarea'
  | 'choiceone'
  | 'choicemulti'
  | 'select'
  | 'rating'
  | 'date'
  | 'email'
  | '|';
export interface QuestionEditableProps {
  question: Question;
  className?: string;
  disabled?: boolean;
  DragHandleProps?: DraggableProvidedDragHandleProps;
  optionTypes?: OptionType[];
  onNameChange?: (e: ChangeEvent<HTMLInputElement>, question: Question) => void;
  onNameClick?: (e: MouseEvent<HTMLDivElement>, question: Question) => void;
  onDescChange?: (e: ChangeEvent<HTMLInputElement>, question: Question) => void;
  onTypeChange?: (e: ChangeEvent<HTMLInputElement>, question: Question) => void;
  onRequiredChange?: (
    e: ChangeEvent<HTMLInputElement>,
    question: Question
  ) => void;
  onDelete?: (e: MouseEvent<HTMLButtonElement>, question: Question) => void;
  onOptionChange?: (
    e: ChangeEvent<HTMLInputElement>,
    question: Question,
    option: Option
  ) => void;
  onOptionDelete?: (
    e: MouseEvent<HTMLButtonElement>,
    question: Question,
    deletedOption: Option
  ) => void;
  onOptionDragEnd?: (
    result: DropResult,
    question: Question,
    nextOptions: Option[]
  ) => void;
  onOptionCreate?: (
    e: MouseEvent<HTMLSpanElement>,
    question: Question,
    index: number
  ) => void;
  onOptionCreateOther?: (
    e: MouseEvent<HTMLButtonElement>,
    question: Question
  ) => void;
  onRatingStartChange?: (
    e: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    question: Question
  ) => void;
  onRatingEndChange?: (
    e: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    question: Question
  ) => void;
  onRatingStartInputChange?: (
    e: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    question: Question
  ) => void;
  onRatingEndInputChange?: (
    e: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    question: Question
  ) => void;
}

const MAX_NAME = 50;
const MAX_DESC = 100;

const optionMap = {
  titleBlock: {
    name: '標題區塊',
    icon: TitleIcon,
  },
  text: {
    name: '簡答',
    icon: ShortTextIcon,
  },
  textarea: {
    name: '段落',
    icon: SubjectIcon,
  },
  choiceone: {
    name: '選擇題',
    icon: RadioButtonCheckedIcon,
  },
  choicemulti: {
    name: '核取方塊',
    icon: CheckboxIcon,
  },
  select: {
    name: '下拉式選單',
    icon: ArrowDropDownCircleIcon,
  },
  rating: {
    name: '線性刻度',
    icon: LinearScaleIcon,
  },
  date: {
    name: '日期',
    icon: InsertInvitationIcon,
  },
  email: {
    name: '電子郵件',
    icon: EmailIcon,
  },
  
};

const QuestionEditable: FC<QuestionEditableProps> = ({
  question,
  className,
  DragHandleProps,
  optionTypes = [
    'titleBlock',
    '|',
    'text',
    'textarea',
    '|',
    'choiceone',
    'choicemulti',
    'select',
    '|',
    'rating',
    '|',
    'date',
    '|',
    'email',
  ],
  onDescChange,
  onNameChange,
  onNameClick,
  onTypeChange,
  onRequiredChange,
  onDelete,
  onOptionChange,
  onOptionDelete,
  onOptionDragEnd,
  onOptionCreate,
  onOptionCreateOther,
  onRatingStartChange,
  onRatingEndChange,
  onRatingStartInputChange,
  onRatingEndInputChange,
  ...other
}) => {
  const classes = useStyles();
  const [name, setName] = React.useState(question.questionName);
  const [type, setType] = React.useState<QuestionType>(question.questionType);
  const [desc, setDesc] = React.useState(question.questionDescription);
  const [isRequired, setIsRequired] = React.useState<boolean>(
    Boolean(question.isRequired)
  );
  const { inputEl, select } = useInputActions();
  const isNameError = !isLength(name || '', {
    min: 0,
    max: MAX_NAME,
  });
  const isDescError = !isLength(desc || '', {
    min: 0,
    max: MAX_DESC,
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (
      onNameChange &&
      isLength(e.target.value, {
        min: 0,
        max: MAX_NAME,
      })
    ) {
      onNameChange(e, question);
    }
  };

  const handleNameClick = (e: MouseEvent<HTMLDivElement>) => {
    select();
    if (onNameClick) {
      onNameClick(e, question);
    }
  };

  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
    if (
      onDescChange &&
      isLength(e.target.value, {
        min: 0,
        max: MAX_DESC,
      })
    ) {
      onDescChange(e, question);
    }
  };

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value as QuestionType);
    if (onTypeChange) {
      onTypeChange(e, question);
    }
  };

  const handleIsRequiredChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setIsRequired(checked);
    if (onRequiredChange) {
      onRequiredChange(e, question);
    }
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    if (onDelete) {
      onDelete(e, question);
    }
  };

  const getNameLabel = () => {
    if (type === 'titleBlock' || type === 'choiceone') return 'Problem';
    return 'Question Options';
  };

  const renderContent = () => {
    switch (type) {
      case 'titleBlock':
        return (
          <TextField
            className={classes.textarea}
            label="Shot answer text"
            multiline
            value={desc}
            onChange={handleDescChange}
            error={isDescError}
            helperText={
              isDescError ? `區塊描述請勿超過 ${MAX_DESC} 個字元` : undefined
            }
          />
        );
      case 'text':
        return <TextField className={classes.text} label="簡答文字" disabled />;
      case 'textarea':
        return (
          <TextField className={classes.textarea} label="詳答文字" disabled />
        );
      case 'choiceone':
        return (
          <QuestionOptionsEditable
            type="radio"
            onChange={onOptionChange}
            onCreate={onOptionCreate}
            onCreateOther={onOptionCreateOther}
            onDelete={onOptionDelete}
            onDragEnd={onOptionDragEnd}
            question={question}
          />
        );
      case 'choicemulti':
        return (
          <QuestionOptionsEditable
            type="checkbox"
            onChange={onOptionChange}
            onCreate={onOptionCreate}
            onCreateOther={onOptionCreateOther}
            onDelete={onOptionDelete}
            onDragEnd={onOptionDragEnd}
            question={question}
          />
        );
      case 'select':
        return (
          <QuestionOptionsEditable
            type="select"
            onChange={onOptionChange}
            onCreate={onOptionCreate}
            onCreateOther={onOptionCreateOther}
            onDelete={onOptionDelete}
            onDragEnd={onOptionDragEnd}
            question={question}
          />
        );
      case 'rating':
        return (
          <QuestionRatingEditable
            question={question}
            onStartChange={onRatingStartChange}
            onEndChange={onRatingEndChange}
            onStartInputChange={onRatingStartInputChange}
            onEndInputChange={onRatingEndInputChange}
          />
        );
      case 'email':
        return <TextField className={classes.text} label="電子郵件" disabled />;
      case 'date':
        return (
          <TextField
            className={classes.text}
            label="年/月/日"
            disabled
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InsertInvitationIcon />
                </InputAdornment>
              ),
            }}
          />
        );
      default:
        return undefined;
    }
  };

  return (
    <Paper className={clsx(className, classes.root)} {...other}>
      <QuestionDragHandle 
        DragHandleProps={DragHandleProps} 
        disabled/>
      {question.questionType === 'choiceone' ? (
        <div className={classes.active} />
      ) : (<div/>)}
      <div className={classes.main}>
        <Grid
          className={classes.content}
          container
          spacing={1}
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} lg={7}>
            <TextField
              inputRef={inputEl}
              multiline
              onChange={handleNameChange}
              onClick={handleNameClick}
              fullWidth
              className={classes.subTitle}
              value={name}
              label={getNameLabel()}
              variant="standard"
              error={isNameError}
              helperText={
                isNameError
                  ? `${getNameLabel()}請勿超過 ${MAX_NAME} 個字元`
                  : undefined
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={2}>
            <TextField
              SelectProps={{ classes: { root: classes.select } }}
              fullWidth
              select
              rounded
              variant="outlined"
              value={type}
              onChange={handleTypeChange}
            >
              {optionTypes.map((type, index) => {
                if (type === '|') {
                  // eslint-disable-next-line react/no-array-index-key
                  return <Divider key={index} className={classes.divider} />;
                }
                if (!optionMap[type]) {
                  return undefined;
                }
                const OptionIcon = optionMap[type]?.icon ?? 'div';
                return (
                  <MenuItem
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className={classes.menuItem}
                    value={type}
                  >
                    <div className={classes.option}>
                      <OptionIcon className={classes.icon} />
                      <Typography variant="body2" display="inline">
                        {optionMap[type]?.name}
                      </Typography>
                    </div>
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} lg={3} className={classes.ispc}>
            <Typography className={classes.required} display="inline">
              required
            </Typography>
              <Switch
                checked={isRequired}
                onChange={handleIsRequiredChange}
              />
            
            <Tooltip title="刪除">
              <IconButton onClick={handleDelete}>
                <Icomoon fontSize='large' type="delete_1"/>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            {renderContent()}
          </Grid>
          <Grid item md={12} className={classes.ismobile}>
            <Typography className={classes.required} display="inline">
              required
            </Typography>
              <Switch
                checked={isRequired}
                onChange={handleIsRequiredChange}
              />
            
            <Tooltip title="刪除">
              <IconButton onClick={handleDelete}>
                <Icomoon fontSize='large' type="delete_1"/>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default QuestionEditable;
