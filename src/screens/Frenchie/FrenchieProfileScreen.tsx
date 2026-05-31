import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../utils/theme';
import Card from '../../components/Common/Card';
import Button from '../../components/Common/Button';

const FrenchieProfileScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImagePlaceholder}>
          <Text style={styles.emoji}>🐶</Text>
        </View>
        <Text style={styles.name}>Biscuit</Text>
        <Text style={styles.breed}>French Bulldog • 3 years old</Text>
      </View>

      <View style={styles.content}>
        <Card>
          <Text style={styles.sectionTitle}>Personality</Text>
          <View style={styles.personalityGrid}>
            <PersonalityTrait label="Favorite Snack" value="Chicken treats" />
            <PersonalityTrait label="Favorite Toy" value="Squeaky ball" />
            <PersonalityTrait label="Energy Level" value="High 🔥" />
            <PersonalityTrait label="Snores" value="Yes 😴" />
            <PersonalityTrait label="Personality" value="Playful & Cuddly" />
            <PersonalityTrait label="Fears" value="Thunderstorms" />
          </View>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Quick Stats</Text>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Weight</Text>
            <Text style={styles.statValue}>8.5 kg</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Last Check-up</Text>
            <Text style={styles.statValue}>2 weeks ago</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Next Reminder</Text>
            <Text style={styles.statValue}>Medication - Today</Text>
          </View>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Behavior Notes</Text>
          <Text style={styles.notes}>
            Biscuit is a very social pup who loves to play with other dogs. She gets excited
            around food and enjoys long walks. Sometimes stubborn during training sessions.
          </Text>
        </Card>

        <View style={styles.buttonGroup}>
          <Button
            title="Edit Profile"
            variant="primary"
            fullWidth
            onPress={() => console.log('Edit frenchie')}
          />
          <Button
            title="View Health"
            variant="secondary"
            fullWidth
            onPress={() => console.log('View health')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

interface PersonalityTraitProps {
  label: string;
  value: string;
}

const PersonalityTrait: React.FC<PersonalityTraitProps> = ({ label, value }) => (
  <View style={styles.traitItem}>
    <Text style={styles.traitLabel}>{label}</Text>
    <Text style={styles.traitValue}>{value}</Text>
  </View>
);

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
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  emoji: {
    fontSize: 60,
  },
  name: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
  },
  breed: {
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
  personalityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  traitItem: {
    flex: 1,
    minWidth: '48%',
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
  },
  traitLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  traitValue: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.primary,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  statLabel: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
  },
  statValue: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
  },
  notes: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  buttonGroup: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
});

export default FrenchieProfileScreen;
