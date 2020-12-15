# Recuperação de senha

**RF**

- The user must be able to recover his password informing his email;
- The user should receive an email with password recovery instructions;
- The user must be able to reset your password;

**RNF**

- Use Mailtrap to test submissions in a development enviroment;
- Use Amazon SES for production shipments;
- Sending emails should happen in the background;

**RN**

- The link sent by email for reset password, must expire in 2 hours;
- The user nees to confirm the new password when resetting it;

# Atualização do perfil

**RF**

- The user must be able update your name, email and password;

**RN**

- The user can not alter your email for a email in use;
- To update your password, the user must enter the old password;
- To update your password, the user needs to confirm the new password;

# Painel do prestador

**RF**

- The user must be able to list their schedules on a specific day;
- The provider must receive a notification whenever there us a new appointment;
- The provider must be able to view unread notifications

**RNF**

- Provider schedules for the day must be cached;
- Service provider notifications must be stored in MongoDB;
- The provider's notifications must be sent in real time using socket.io;

**RN**

- The notification must have a read or unread status so that the provider can control;

# Agendamento de serviços

**RF**

- The user must be able to list all registered service providers;
- The user must be able to list the days of a month with at least one available time from a provider;
- The user should be able to list available times on a specific day for a provider;
- The user must be able to make a new appointment with a provider;

**RNF**

- The list of providers must be cached;

**RN**

- Each appointment must last exactly one hour;
- Appointments must be able available between 8h and 18h (First in 8h, last in 17h);
- The user cannot schedule at an already busy time;
- The user cannot schedule at a time that has passed;
- The user cannot schedule services with himself;
