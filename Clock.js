import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <Text>{date.toLocaleTimeString()}</Text>
  );
}
export default Clock;