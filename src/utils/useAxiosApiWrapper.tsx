import { useCallback } from "react";
import apis from "redux/apis";
import getDeviceInfo from "@e-group/utils/getDeviceInfo";
import { LogPayload, RootState } from "redux/root";
import { useSelector } from "react-redux";
import useAxiosApi, { AxiosApi } from "@e-group/hooks/useAxiosApi";
import { AxiosError } from "axios";

export default function useAxiosApiWrapper<
  Data = unknown,
  P = unknown,
  ErrorData = unknown
>(api: AxiosApi<Data>) {
  const store = useSelector<RootState, RootState>((state) => state);
  const onrejected = useCallback(
    (error: AxiosError<ErrorData>) => {
      // send error log
      let logPayload: LogPayload = {
        function: "useAxiosApi",
        browserDescription: window.navigator.userAgent,
        jsonData: {
          action: api.name,
          store,
          deviceInfo: getDeviceInfo(),
        },
        level: "ERROR",
      };
      if (!error.response) {
        logPayload = {
          ...logPayload,
          message: error.message,
        };
      }
      apis.tools.fetchPostLogs(logPayload);
    },
    [api.name, store]
  );
  const parameters = useAxiosApi<Data, P, ErrorData>(api, onrejected);
  return parameters;
}
