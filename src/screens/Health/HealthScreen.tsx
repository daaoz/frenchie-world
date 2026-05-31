import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../utils/theme';
import Card from '../../components/Common/Card';
import Button from '../../components/Common/Button';

const HealthScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Health Tracking</Text>
        <Text style={styles.subtitle}>for Biscuit</Text>
      </View>

      <View style={styles.content}>
        <Card>
          <Text style={styles.sectionTitle}>Weight History</Text>
          <View style={styles.weightCard}>
            <Text style={styles.weightLabel}>Current Weight</Text>
            <Text style={styles.weightValue}>8.5 kg</Text>
            <Text style={styles.weightDate}>Last updated: Today</Text>
          </View>
          <View style={styles.weightEntry}>
            <Text style={styles.entryDate}>May 30, 2025</Text>
            <Text style={styles.entryWeight}>8.5 kg</Text>
          </View>
          <View style={styles.weightEntry}>
            <Text style={styles.entryDate}>May 23, 2025</Text>
            <Text style={styles.entryWeight}>8.4 kg</Text>
          </View>
          <View style={styles.weightEntry}>
            <Text style={styles.entryDate}>May 16, 2025</Text>
            <Text style={styles.entryWeight}>8.3 kg</Text>
          </View>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Last Vet Visit</Text>
          <View style={styles.vetInfo}>
            <View style={styles.vetInfoRow}>
              <Text style={styles.vetLabel}>Date</Text>
              <Text style={styles.vetValue}>May 15, 2025</Text>
            </View>
            <View style={styles.vetInfoRow}>
              <Text style={styles.vetLabel}>Vet</Text>
              <Text style={styles.vetValue}>Dr. Sarah Johnson</Text>
            </View>
            <View style={styles.vetInfoRow}>
              <Text style={styles.vetLabel}>Status</Text>
              <Text style={[styles.vetValue, { color: theme.colors.success }]}>
                Healthy ✓
              </Text>
            </View>
          </View>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Active Medications</Text>
          <View style={styles.medicationItem}>
            <View style={styles.medicationCircle}>
              <Text style={styles.medicationEmoji}>💊</Text>
            </View>
            <View style={styles.medicationDetails}>
              <Text style={styles.medicationName}>Probiotics</Text>
              <Text style={styles.medicationDose}>1 tablet daily</Text>
            </View>
          </View>
          <View style={styles.medicationItem}>
            <View style={styles.medicationCircle}>
              <Text style={styles.medicationEmoji}>💊</Text>
            </View>
            <View style={styles.medicationDetails}>
              <Text style={styles.medicationName}>Joint Support</Text>
              <Text style={styles.medicationDose}>Twice daily</Text>
            </View>
          </View>
        </Card>

        <View style={styles.buttonGroup}>
          <Button
            title="Log Weight"
            variant="primary"
            fullWidth
            onPress={() => console.log('Log weight')}
          />
          <Button
            title="Medical History"
            variant="secondary"
            fullWidth
            onPress={() => console.log('View medical history')}
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
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    gap: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  weightCard: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
  },
  weightLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  weightValue: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginTop: theme.spacing.sm,
  },
  weightDate: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
  weightEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  entryDate: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
  },
  entryWeight: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
  },
  vetInfo: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
  },
  vetInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  vetLabel: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
  },
  vetValue: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  medicationCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  medicationEmoji: {
    fontSize: 24,
  },
  medicationDetails: {
    flex: 1,
  },
  medicationName: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
  },
  medicationDose: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  buttonGroup: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
});

export default HealthScreen;
