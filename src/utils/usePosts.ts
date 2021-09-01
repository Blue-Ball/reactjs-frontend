import { Post } from "typings";
import makeGetHook from "@e-group/hooks/makeGetHook";
import { fetcher } from "./fetchers";

const usePosts = makeGetHook<Post[]>("/posts", fetcher);
export default usePosts;
