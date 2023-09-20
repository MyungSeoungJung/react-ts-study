import styled from "@emotion/styled";

/* 
div (
  input - button
  ul
    - li
      button - span
)
*/

export const TodoContainer = styled.div`
  label: todo-container;

  header {
    input {
      border: 1px solid green;
    }

    /* 자식선택자만 이용 */
    > button {
      border: 1px solid green;
      background: white;
    }
  }

  ul {
    margin-top: 20px;

    li {
      padding: 7px;
      border: 1px solid green;
      margin-bottom: 3px;
      width: fit-content;

      button {
        border: 1px solid gray;
        margin-right: 3px;
      }
    }
  }

  footer {
    color: green;

    data {
      font-weight: bold;
    }
  }

  // id 선택을 먼저 한 것
  // #app-theme.light
  // app-theme id가 있는 요소의 클래스가 light인 요소 선택
  // #app-theme.light 요소 자손인 현재클래스를 선택
  // #app-theme.light css-sikd09 header input { .... }
  #app-theme.light & {
    header {
      input {
        background-color: white;
        color: black;
      }
    }
  }

  #app-theme.dark & {
    header {
      input {
        background-color: black;
        color: white;
      }
    }
  }
`;
