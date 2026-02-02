# Privacy Policy for What's Nearby

**Last Updated: January 4, 2026**

## Introduction

What's Nearby ("we", "our", or "the app") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.

## Information We Collect

### Location Data
- **GPS Coordinates**: The app accesses your device's GPS to determine your current location.
- **Purpose**: Location data is used solely to find nearby Points of Interest (POI) from Wikipedia.
- **Storage**: Your current location is temporarily stored in the app's memory while the app is running. Location coordinates are NOT transmitted to our servers or any third-party services except Wikipedia's public API.
- **Background Tracking**: When the app is minimized, location updates continue to monitor if you've moved more than 1km to provide notifications about new nearby POI.

### User Preferences
- **Language Selection**: Your preferred language for Wikipedia articles is stored locally on your device using SharedPreferences.
- **Favorites**: POI that you mark as favorites are stored locally on your device.
- **Last Viewed Timestamp**: The app stores timestamps of when you last viewed each POI to prevent duplicate notifications.

### Data NOT Collected
We do NOT collect, store, or transmit:
- Personal identification information (name, email, phone number)
- Device identifiers for tracking purposes
- Usage analytics or crash reports
- Any data to remote servers owned by us

## How We Use Your Information

### Location Services
- **Real-time POI Discovery**: Your GPS coordinates are sent to Wikipedia's public Geosearch API to find nearby points of interest.
- **Distance Calculation**: Location data is used to calculate and display the distance and direction to POI.
- **Navigation**: When you choose to navigate to a POI, your location is shared with your device's navigation app (e.g., Google Maps, Apple Maps).

### Local Storage
- **Favorites Management**: POI you favorite are saved locally on your device for offline access.
- **Language Preferences**: Your selected language is stored to personalize Wikipedia content.
- **Notification History**: Viewed POI timestamps prevent showing the same notification repeatedly.

## Third-Party Services

### Wikipedia API
- **Service**: We use Wikipedia's public Geosearch API and Query API.
- **Data Shared**: Only your GPS coordinates and selected language code.
- **Privacy Policy**: [Wikimedia Privacy Policy](https://foundation.wikimedia.org/wiki/Privacy_policy)
- **Purpose**: To retrieve information about nearby points of interest.

### Text-to-Speech (TTS)
- **Service**: Uses your device's built-in TTS engine (Android TTS or iOS Speech).
- **Data Shared**: Wikipedia article text is processed locally on your device.
- **No Cloud Processing**: Text-to-speech is performed entirely on-device.

### URL Launcher
- **Service**: Opens external links in your default browser or Wikipedia app.
- **Data Shared**: When you click to open a Wikipedia article or navigation, the relevant URL/coordinates are passed to the appropriate app on your device.

## Data Security

### Local Storage Only
- All user data (favorites, preferences, timestamps) is stored locally on your device using Flutter's secure storage mechanisms.
- No user data is transmitted to remote servers controlled by us.
- Data is protected by your device's security features (encryption, access controls).

### Network Communications
- All API requests to Wikipedia use HTTPS encryption.
- No authentication tokens or personal identifiers are sent with API requests.
- API requests are anonymous and cannot be traced back to individual users.

## Permissions

The app requires the following permissions:

### Location Permission (Required)
- **Android**: `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`, `ACCESS_BACKGROUND_LOCATION`
- **iOS**: "Location When In Use" and "Location Always"
- **Purpose**: To determine your current position and find nearby POI.
- **Background Access**: Used to monitor location changes and provide notifications when you move to a new area.

### Internet Permission (Required)
- **Purpose**: To fetch POI data and images from Wikipedia's public API.

### Notification Permission (Optional)
- **Purpose**: To notify you about newly discovered POI when the app is running in the background.
- **Control**: You can disable notifications in your device's settings.

## Your Rights and Choices

### Location Access
- You can revoke location permissions at any time through your device settings.
- Revoking location access will prevent the app from finding nearby POI.

### Notifications
- You can disable notifications in your device settings while still using the app.

### Delete Your Data
- **Favorites**: Clear favorites from within the app's favorites screen.
- **All App Data**: Uninstalling the app removes all locally stored data.
- **Language Preferences**: Reset by selecting a different language or reinstalling the app.

### No Account Required
- The app does not require account creation or login.
- No data is associated with your identity.

## Children's Privacy

What's Nearby does not knowingly collect information from children under 13 years of age. The app does not require age verification as it does not collect personal information. Parents and guardians should supervise children's use of location-based services.

## Data Retention

- **Location Data**: Only your current location is kept in memory while the app is running. Historical location data is not stored.
- **Favorites**: Stored indefinitely on your device until you remove them or uninstall the app.
- **Preferences**: Stored until you change them or uninstall the app.
- **View Timestamps**: Stored until you uninstall the app.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last Updated" date at the top of this policy. We encourage you to review this policy periodically. Continued use of the app after changes constitutes acceptance of the updated policy.

## Data Processing Location

- **Local Processing**: All data processing occurs on your device.
- **Wikipedia Servers**: API requests are processed by Wikimedia Foundation servers. See their privacy policy for details on how they handle API requests.

## International Users

What's Nearby can be used worldwide. Location data is processed locally on your device and only shared with Wikipedia's API servers, which are operated by the Wikimedia Foundation globally.

## GDPR Compliance (EU Users)

If you are located in the European Economic Area (EEA):

### Legal Basis for Processing
- **Consent**: By granting location permissions, you consent to location data processing.
- **Legitimate Interest**: Processing is necessary to provide the core functionality of finding nearby POI.

### Your GDPR Rights
- **Right to Access**: You can access all data stored by the app in your device's app storage.
- **Right to Erasure**: Uninstall the app to delete all data.
- **Right to Data Portability**: Favorites are stored in standard local database format.
- **Right to Withdraw Consent**: Revoke location permissions in device settings.

### Data Controller
This app does not collect personal data on remote servers. You remain in control of all data stored locally on your device.

## California Privacy Rights (CCPA)

If you are a California resident:
- We do not sell your personal information.
- We do not share personal information for cross-context behavioral advertising.
- The app collects location data only as described in this policy.

## Contact Information

For questions or concerns about this Privacy Policy, please:
- Open an issue on our GitHub repository: [https://github.com/spidgorny/-](https://github.com/spidgorny/-)
- Email: [Your contact email if available]

## Summary

**What We Collect:**
- GPS location (temporary, in-memory only)
- Language preference (stored locally)
- Favorites list (stored locally)
- View timestamps (stored locally)

**What We DON'T Collect:**
- Personal identification
- Email or phone numbers
- Device identifiers for tracking
- Analytics or usage statistics
- Any data sent to our servers (we don't have any)

**Third-Party Data Sharing:**
- Wikipedia API receives: GPS coordinates, language code
- Navigation apps receive: POI coordinates (only when you click navigate)
- No other third-party data sharing

**Your Control:**
- All data stored locally on your device
- Uninstall app = delete all data
- Revoke permissions anytime
- No account, no tracking

---

**By using What's Nearby, you agree to this Privacy Policy.**

