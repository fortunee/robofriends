import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { apiGetReq } from '../../api';
import { ROBOTS_URL } from '../../constants';
import { Card, Loading } from '../../components';
import { RobotProps } from '../../containers/App';

const Robot = () => {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState<RobotProps>();
  useEffect(() => {
    if (id) {
      (async () => {
        const data = await apiGetReq(`${ROBOTS_URL}/${id}`);
        setState(data);
      })();
    }
  }, [id]);

  if (!state) {
    return <Loading />
  }
  console.log(state)
  return <Card {...state} />
};

export default Robot;
