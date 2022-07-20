import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { rootActions } from "../redux-store/slices";

function Edit() {
  const dispatch = useDispatch();

  const { data, status } = useSelector((RootState) => RootState.data.list);
  return (
    <div>
      <input
        value={data?.title}
        onChange={(e) =>
          dispatch(rootActions.data.list.setTitle(e.target.value))
        }
      />
    </div>
  );
}

export default Edit;
