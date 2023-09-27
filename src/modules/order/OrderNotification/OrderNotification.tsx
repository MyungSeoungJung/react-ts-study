import { useEffect, useState } from "react";
import { Container, ItemContainer, Wrapper } from "./style";

const OrderNotification = () => {
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    // 컴포넌트가 처음 로딩될때 응답 대기
    const eventSource = new EventSource(
      "http://localhost:8082/orders/notifications"
    );
    // 메시지가 오면 실행
    eventSource.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };
    //
    // 클린업
    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <Wrapper>
      <Container>
        {messages.map((message, index) => (
          <ItemContainer key={index}>{message}</ItemContainer>
        ))}
      </Container>
    </Wrapper>
  );
};
export default OrderNotification;
