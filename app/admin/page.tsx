import ImageUpload from '@/components/ImageUpload';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Gerenciador de Imagens</h1>
        <ImageUpload />
      </div>
    </div>
  );
}
