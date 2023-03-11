interface ExternalApi {
  fetch: fetchTranslation;
  request: requestTranslation;
}

interface Translation {
  translation: string;
  quality: number;
}

type fetchTranslation = (text: string) => Promise<Translation>;
type requestTranslation = (
  text: string,
  callback: (err?: Error) => void
) => void;
