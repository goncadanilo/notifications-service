import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notificartions-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should ve able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications).toContain(notification);
  });
});
