import { IChartData } from '../types';
import { IRequestConfig } from '../types/request';
import { AppDispatch } from './index';

export const requestEffect = (config: IRequestConfig, action: { startRequest: any; setSuccess: any; setFailure: any }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(action.startRequest());
    
    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : 'GET',
        headers: config.headers
          ? config.headers
          : {
              'content-type': 'application/json'
            },
        body: config.body ? JSON.stringify(config.body) : null,
        signal: config.signal ? config.signal : null
      });

      const result: any = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      const data = result as Array<IChartData>;

      dispatch(action.setSuccess({ data }));
    } catch (err) {
      const error = (err as any)?.message || 'Something went wrong!';

      dispatch(action.setFailure({ error }));
    }
  };
};
