import { useState } from "react";

export function useTextInput() {
  const [searchInputText, setSearchInputText] = useState("");

  const onChangeInput = (e) => setSearchInputText(e.target.value);

  return { searchInputText, onChangeInput };
}
