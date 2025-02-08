import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const PostFooter = ()=>{
  return <div className="d-flex">
    <button type="button" class="btn btn-dark border border-secondary" style={{width : "33%"}}><AiOutlineLike />Like</button>
    <button type="button" class="btn btn-dark border border-secondary" style={{width : "34%"}}><FaRegComment />Comment</button>
    <button type="button" class="btn btn-dark border border-secondary" style={{width : "33%"}}><PiShareFat />Share</button>
  </div>
}

export default PostFooter;