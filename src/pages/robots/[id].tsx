import { apiGetReq } from '../../api';
import { ROBOTS_URL } from '../../constants';
import { Card } from '../../components';
import { RobotProps } from '../../containers/App';
import { GetServerSideProps } from 'next';

const Robot = (props: { robot?: RobotProps }) => {
  if (!props.robot) {
    return (
      <div className="vh-100 dt w-100">
        <h1 className="tc f1 dtc v-mid">
          Error loading robot!! Please Try again...
        </h1>
      </div>
    );
  }

  return (
    <div className="vh-100 dt w-100">
      <div className="tc dtc v-mid">
        <Card {...props.robot} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const id = params?.id;
    const robot = await apiGetReq(`${ROBOTS_URL}/${id}`);
    return {
      props: {
        robot,
      },
    };
  } catch {
    res.statusCode = 404;
    return { props: {} };
  }
};

export default Robot;
