import { HttpMethod, HttpContentType } from "../../enums/enums";

type HttpOptions = {
  method?: HttpMethod;
  contentType?: HttpContentType;
  payload?: BodyInit | null;
  params?: Record<string, unknown>;
};

export type { HttpOptions };
