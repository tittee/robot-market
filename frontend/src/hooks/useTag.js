import { useState } from 'react';
import { createTag, deleteTag } from 'api';

const useTags = ({ initTags, object_id }) => {
  const [tags, setTags] = useState(initTags || []);

  const updateTags = (newTags) => {
    setTags(newTags);
  };

  const addTag = async (tag) => {
    if (!tag) {
      return;
    }
    const res = await createTag(tag, object_id);
    if (res && res.data) {
      setTags([
        ...tags,
        {
          tag: tag.toLowerCase(),
          uid: res.data.data.tag_id,
        },
      ]);
    }
  };

  const removeTag = async (tag_uid) => {
    await deleteTag(tag_uid, object_id);
    const removedTags = [...tags];
    const index = tags.findIndex((tag) => tag.uid === tag_uid);
    removedTags.splice(index, 1);
    setTags(removedTags);
  };

  return {
    addTag,
    removeTag,
    tags,
    updateTags,
  };
};

export default useTags;
