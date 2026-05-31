import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../utils/theme';
import Card from '../../components/Common/Card';
import Button from '../../components/Common/Button';

const HumanProfileScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImagePlaceholder}>
          <Text style={styles.emoji}>👤</Text>
        </View>
        <Text style={styles.name}>Sarah Martinez</Text>
        <Text style={styles.email}>sarah.martinez@email.com</Text>
      </View>

      <View style={styles.content}>
        <Card>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue}>San Francisco, CA</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Joined</Text>
            <Text style={styles.infoValue}>March 2025</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Frenchies</Text>
            <Text style={styles.infoValue}>1</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Bio</Text>
            <Text style={styles.infoValue}>
              Proud Frenchie parent 🐾 | Health enthusiast | Community lover
            </Text>
          </View>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Activity</Text>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>48</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>156</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceInfo}>
              <Text style={styles.preferenceName}>Notifications</Text>
              <Text style={styles.preferenceDesc}>Stay updated with reminders</Text>
            </View>
            <Text style={styles.preferenceStatus}>ON</Text>
          </View>
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceInfo}>
              <Text style={styles.preferenceName}>Community Updates</Text>
              <Text style={styles.preferenceDesc}>Weekly digest</Text>
            </View>
            <Text style={styles.preferenceStatus}>ON</Text>
          </View>
        </Card>

        <View style={styles.buttonGroup}>
          <Button
            title="Edit Profile"
            variant="primary"
            fullWidth
            onPress={() => console.log('Edit profile')}
          />
          <Button
            title="Settings"
            variant="outline"
            fullWidth
            onPress={() => console.log('Settings')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.colors.secondary,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  emoji: {
    fontSize: 48,
  },
  name: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
  },
  email: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    gap: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  infoLabel: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
  },
  infoValue: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    flex: 1,
    textAlign: 'right',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: theme.spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
  statLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  preferenceInfo: {
    flex: 1,
  },
  preferenceName: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
  },
  preferenceDesc: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  preferenceStatus: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.success,
  },
  buttonGroup: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
});

export default HumanProfileScreen;
