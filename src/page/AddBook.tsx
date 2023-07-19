import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { usePostBookMutation } from "../redux/features/product/productApi";
import { IProduct } from "../types/globalTypes";

const AddNewBook = () => {
  const { user } = useAppSelector((state) => state.user);

  const [postBook, { isError, isLoading, isSuccess }] = usePostBookMutation();
  console.log(isError);
  console.log(isLoading);
  console.log(isSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();
  console.log(errors);

  const handelFormSubmit = (data: IProduct) => {
    const bookData = {
      ...data,
      reviews: [],
    };
    console.log(bookData);
    console.log(data);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postBook({ data });
  };

  return (
    <div className="bg-base-300 grid justify-center">
      <h2 className="text-2xl text-black text-center pt-5 font-bold">
        ADD NEW BOOK
      </h2>

      <form
        className=" border-black rounded-lg p-10"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(handelFormSubmit)}
      >
        <div className="grid">
          {/* <label className='text-2xl inline-block' htmlFor="title">Title</label> */}
          <input
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            type="text"
            placeholder="book title"
            autoCapitalize="none"
            autoComplete="title"
            autoCorrect="off"
            {...register("name", { required: "title is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="author"
            {...register("pages", { required: "title is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="author"
            {...register("format", { required: "title is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="author"
            {...register("description", { required: "title is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="author"
            {...register("file", { required: "title is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="genre"
            {...register("interactive", { required: "genre is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="publicationDate"
            {...register("Writer1", {
              required: "publication Date is required",
            })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="publicationDate"
            {...register("Writer2")}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="publicationDate"
            {...register("Writer3", {
              required: "publication Date is required",
            })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="publicationDate"
            {...register("Writer4", {
              required: "publication Date is required",
            })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="publicationDate"
            {...register("details", {
              required: "publication Date is required",
            })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("img", { required: "image link is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("img1", { required: "image link is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("img2", { required: "image link is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("img3", { required: "image link is required" })}
          />
          <input
            type="text"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("img4", { required: "image link is required" })}
          />
          <input
            type="number"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("price", { required: "image link is required" })}
          />
          <input
            type="number"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("quantity", { required: "image link is required" })}
          />
          <input
            type="number"
            className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
            placeholder="img"
            {...register("rating", { required: "image link is required" })}
          />
          <p>{}</p>
        </div>

        <div className="mt-8 mx-auto text-center">
          <button className=" btn btn-success">ADD NEW BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBook;
