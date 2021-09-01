import { ReactComponentElement, ReactNode } from "react";
import { RouteConfig } from "react-router-config";

export interface Option {
  optionId: string;
  optionName: string;
  isOther: number;
  optionNo: number;
  hasInput: number;
}

export type QuestionType =
| 'text'
| 'textarea'
| 'choiceone'
| 'radiogroup'
| 'choicemulti'
| 'select'
| 'email'
| 'date'
| 'titleBlock'
| 'rating';

export interface Question {
  questionId: string;
  questionName: string;
  questionType: QuestionType;
  questionDescription?: string;
  questionNo?: number;
  isRequired?: number;
  optionList?: Option[];
  questionRatingStartValue?: number;
  questionRatingEndValue?: number;
  questionRatingStartName?: string;
  questionRatingEndName?: string;
}

export type QuestionOption = 'radio' | 'checkbox' | 'select';

export interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface EgRouteConfig extends RouteConfig {
  component?: ReactComponentElement
  breadcrumbName?: string;
  menuIcon?: ReactNode
  collapse?: boolean;
  routes?: EgRouteConfig[]
}