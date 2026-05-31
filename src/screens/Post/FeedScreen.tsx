import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { theme } from '../../utils/theme';
import Card from '../../components/Common/Card';
import Button from '../../components/Common/Button';

interface Post {
  id: string;
  author: string;
  frenchie: string;
  content: string;
  timestamp: string;
  emoji: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: 'Sarah M.',
    frenchie: 'Biscuit',
    content: 'Just started Biscuit on a new diet. She\'s loving it so far! 🥗',
    timestamp: '2 hours ago',
    emoji: '🥗',
  },
  {
    id: '2',
    author: 'Mike T.',
    frenchie: 'Duke',
    content: 'Duke had his first vet appointment today. Everything looks great! 💪',
    timestamp: '4 hours ago',
    emoji: '💪',
  },
  {
    id: '3',
    author: 'Emily R.',
    frenchie: 'Rosie',
    content: 'Beautiful morning walk with Rosie in the park. She made so many new friends! 🐾',
    timestamp: '1 day ago',
    emoji: '🐾',
  },
  {
    id: '4',
    author: 'James L.',
    frenchie: 'Max',
    content: 'Max finally mastered "sit"! Proud dad moment 🎉',
    timestamp: '2 days ago',
    emoji: '🎉',
  },
];

const FeedScreen: React.FC = () => {
  const renderPost = (post: Post) => (
    <Card key={post.id} style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.authorInfo}>
          <View style={styles.authorAvatar}>
            <Text style={styles.avatarEmoji}>{post.emoji}</Text>
          </View>
          <View>
            <Text style={styles.authorName}>{post.author}</Text>
            <Text style={styles.frenchieName}>{post.frenchie}</Text>
          </View>
        </View>
        <Text style={styles.timestamp}>{post.timestamp}</Text>
      </View>
      <Text style={styles.postContent}>{post.content}</Text>
      <View style={styles.postActions}>
        <Text style={styles.actionText}>❤️ Like</Text>
        <Text style={styles.actionText}>💬 Comment</Text>
        <Text style={styles.actionText}>↗️ Share</Text>
      </View>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Community Feed</Text>
        <Text style={styles.subtitle}>Stay updated with your Frenchie family</Text>
      </View>

      <View style={styles.composeSection}>
        <Card style={styles.composeCard}>
          <Button
            title="Create a Post"
            variant="secondary"
            fullWidth
            onPress={() => console.log('Create post')}
          />
        </Card>
      </View>

      <View style={styles.postsContainer}>
        {mockPosts.map((post) => renderPost(post))}
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
  composeSection: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
  },
  composeCard: {
    backgroundColor: theme.colors.secondary,
  },
  postsContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.lg,
  },
  postCard: {
    marginBottom: theme.spacing.sm,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  authorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  avatarEmoji: {
    fontSize: 24,
  },
  authorName: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
  },
  frenchieName: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  timestamp: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  postContent: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text,
    lineHeight: 22,
    marginBottom: theme.spacing.md,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  actionText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    padding: theme.spacing.sm,
  },
});

export default FeedScreen;
