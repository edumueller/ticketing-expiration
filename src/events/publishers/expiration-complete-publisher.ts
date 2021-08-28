import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@devneering/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
