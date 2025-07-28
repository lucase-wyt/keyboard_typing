import React, { useState, useEffect } from 'react';
import { useDatabase } from '../contexts/database';
import {
  PageContainer,
  PageTitle,
  ActionBar,
  SearchBox,
  Button,
  EmptyState,
  LibraryGrid,
  LibraryCard,
  LibraryHeader,
  LibraryTitle,
  LibraryDescription,
  LibraryMeta,
  MetaTag,
  LibraryActions,
  SmallButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  WordList,
} from '../components/styled-components/styled-page';

function LibraryPage() {
  const { db, isInitialized } = useDatabase();
  const [libraries, setLibraries] = useState([]);
  const [filteredLibraries, setFilteredLibraries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingLibrary, setEditingLibrary] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    level: 'beginner',
    type: 'custom',
    words: [],
  });
  const [newWord, setNewWord] = useState('');

  useEffect(() => {
    if (isInitialized) {
      loadLibraries();
    }
  }, [isInitialized]);

  useEffect(() => {
    filterLibraries();
  }, [libraries, searchTerm]);

  const loadLibraries = async () => {
    if (!db) return;

    try {
      const data = await db.getLibraries();
      setLibraries(data);
      console.log('词库加载完成:', data);
    } catch (error) {
      console.error('加载词库失败:', error);
    }
  };

  const filterLibraries = () => {
    if (!searchTerm) {
      setFilteredLibraries(libraries);
    } else {
      const filtered = libraries.filter(
        (library) =>
          library.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          library.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredLibraries(filtered);
    }
  };

  const openCreateModal = () => {
    setEditingLibrary(null);
    setFormData({
      name: '',
      description: '',
      level: 'beginner',
      type: 'custom',
      words: [],
    });
    setShowModal(true);
  };

  const openEditModal = (library) => {
    setEditingLibrary(library);
    setFormData({
      name: library.name,
      description: library.description,
      level: library.level,
      type: library.type,
      words: [...library.words],
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingLibrary(null);
    setNewWord('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addWord = () => {
    if (newWord.trim()) {
      setFormData((prev) => ({
        ...prev,
        words: [...prev.words, newWord.trim()],
      }));
      setNewWord('');
    }
  };

  const removeWord = (index) => {
    setFormData((prev) => ({
      ...prev,
      words: prev.words.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('请输入词库名称');
      return;
    }

    if (formData.words.length === 0) {
      alert('请至少添加一个单词或句子');
      return;
    }

    try {
      const libraryData = {
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      if (editingLibrary) {
        libraryData.id = editingLibrary.id;
        await db.updateLibrary(libraryData);
        console.log('词库更新成功');
      } else {
        await db.addLibrary(libraryData);
        console.log('词库创建成功');
      }

      await loadLibraries();
      closeModal();
    } catch (error) {
      console.error('保存词库失败:', error);
      alert('保存词库失败');
    }
  };

  const handleDelete = async (library) => {
    if (window.confirm(`确定要删除词库"${library.name}"吗？此操作不可撤销。`)) {
      try {
        await db.deleteLibrary(library.id);
        await loadLibraries();
        console.log('词库删除成功');
      } catch (error) {
        console.error('删除词库失败:', error);
        alert('删除词库失败');
      }
    }
  };

  const importFromFile = () => {
    // 使用 Electron API 打开文件对话框
    if (window.electronAPI) {
      window.electronAPI
        .openFile()
        .then((result) => {
          if (result.content) {
            try {
              const importedData = JSON.parse(result.content);
              if (Array.isArray(importedData)) {
                // 批量导入词库
                importedData.forEach(async (library) => {
                  await db.addLibrary(library);
                });
                loadLibraries();
                alert('导入成功！');
              }
            } catch (error) {
              console.error('导入失败:', error);
              alert('导入失败，请检查文件格式');
            }
          }
        })
        .catch((error) => {
          console.error('打开文件失败:', error);
        });
    }
  };

  const exportToFile = () => {
    if (libraries.length === 0) {
      alert('没有可导出的词库');
      return;
    }

    // 使用 Electron API 保存文件
    if (window.electronAPI) {
      const data = JSON.stringify(libraries, null, 2);
      window.electronAPI
        .saveFile(data, 'libraries.json')
        .then(() => {
          alert('导出成功！');
        })
        .catch((error) => {
          console.error('导出失败:', error);
          alert('导出失败');
        });
    }
  };

  return (
    <PageContainer>
      <PageTitle>📚 词库管理</PageTitle>

      <ActionBar>
        <SearchBox
          type="text"
          placeholder="搜索词库..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div style={{ display: 'flex', gap: '15px' }}>
          <Button className="secondary" onClick={importFromFile}>
            📥 导入
          </Button>
          <Button className="secondary" onClick={exportToFile}>
            📤 导出
          </Button>
          <Button className="primary" onClick={openCreateModal}>
            ➕ 新建词库
          </Button>
        </div>
      </ActionBar>

      {filteredLibraries.length === 0 ? (
        <EmptyState>
          {searchTerm
            ? '没有找到匹配的词库'
            : '还没有自定义词库，点击"新建词库"开始创建'}
        </EmptyState>
      ) : (
        <LibraryGrid>
          {filteredLibraries.map((library) => (
            <LibraryCard key={library.id}>
              <LibraryHeader>
                <div>
                  <LibraryTitle>{library.name}</LibraryTitle>
                  <LibraryMeta>
                    <MetaTag type="level">{library.level}</MetaTag>
                    <MetaTag type="type">{library.type}</MetaTag>
                    <MetaTag type="count">
                      {library.words?.length || 0} 条
                    </MetaTag>
                  </LibraryMeta>
                </div>
              </LibraryHeader>

              <LibraryDescription>
                {library.description || '暂无描述'}
              </LibraryDescription>

              <LibraryActions>
                <SmallButton
                  className="edit"
                  onClick={() => openEditModal(library)}
                >
                  ✏️ 编辑
                </SmallButton>
                <SmallButton
                  className="delete"
                  onClick={() => handleDelete(library)}
                >
                  🗑️ 删除
                </SmallButton>
              </LibraryActions>
            </LibraryCard>
          ))}
        </LibraryGrid>
      )}

      {showModal && (
        <Modal onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                {editingLibrary ? '编辑词库' : '新建词库'}
              </ModalTitle>
              <CloseButton onClick={closeModal}>×</CloseButton>
            </ModalHeader>

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>词库名称</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="输入词库名称"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>描述</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="输入词库描述（可选）"
                />
              </FormGroup>

              <div style={{ display: 'flex', gap: '15px' }}>
                <FormGroup style={{ flex: 1 }}>
                  <Label>难度等级</Label>
                  <Select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                  >
                    <option value="beginner">初级</option>
                    <option value="intermediate">中级</option>
                    <option value="advanced">高级</option>
                  </Select>
                </FormGroup>

                <FormGroup style={{ flex: 1 }}>
                  <Label>类型</Label>
                  <Select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="custom">自定义</option>
                    <option value="words">单词</option>
                    <option value="sentences">句子</option>
                    <option value="programming">编程</option>
                  </Select>
                </FormGroup>
              </div>

              <FormGroup>
                <Label>单词/句子</Label>
                <div
                  style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
                >
                  <Input
                    type="text"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="输入单词或句子"
                    onKeyPress={(e) =>
                      e.key === 'Enter' && (e.preventDefault(), addWord())
                    }
                  />
                  <Button type="button" className="primary" onClick={addWord}>
                    添加
                  </Button>
                </div>

                <WordList>
                  {formData.words.length === 0 ? (
                    <div
                      style={{
                        textAlign: 'center',
                        color: '#999',
                        padding: '20px',
                      }}
                    >
                      暂无内容
                    </div>
                  ) : (
                    formData.words.map((word, index) => (
                      <WordItem key={index}>
                        <span>{word}</span>
                        <SmallButton
                          type="button"
                          className="delete"
                          onClick={() => removeWord(index)}
                        >
                          删除
                        </SmallButton>
                      </WordItem>
                    ))
                  )}
                </WordList>
              </FormGroup>

              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  type="button"
                  className="secondary"
                  onClick={closeModal}
                >
                  取消
                </Button>
                <Button type="submit" className="primary">
                  {editingLibrary ? '更新' : '创建'}
                </Button>
              </div>
            </form>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
}

export default LibraryPage;
