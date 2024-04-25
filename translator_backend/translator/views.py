# translator/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .translation_service import translate_text  # Import your translation function

@api_view(['POST'])
def translate(request):
    source_text = request.data.get('source_text')
    source_language = request.data.get('source_language')
    target_language = request.data.get('target_language')

    # Translate the text using your translation function
    translated_text = translate_text(source_text, source_language, target_language)

    return Response({'target_text': translated_text})
