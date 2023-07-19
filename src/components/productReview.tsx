/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ChangeEvent, FormEvent, useState } from "react";

import { FiSend } from "react-icons/fi";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "../redux/features/product/productApi";
import img from "../../public/logo.jpg";
interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);

    const options = {
      id: id,
      data: { comment: inputValue },
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postComment(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          placeholder="write your comment"
          className="lg:w-1/2 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <img className="w-16 h-16 rounded-full" src={img} alt="" />

            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
